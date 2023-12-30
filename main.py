from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import tensorflow as tf
from fastapi.staticfiles import StaticFiles
from PIL import Image
import io
import numpy as np
from constants import CIFAR_CLASSES
app = FastAPI()

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Load CIFAR model
cifar_model = tf.keras.models.load_model('static/cifar.h5')

# FastAPI routes
@app.get("/")
async def home():
    return {"message": "Welcome to Visionify"}

@app.post("/predict/cifar")
async def predict_cifar(file: UploadFile = File(...)):
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png format!"
    image = Image.open(io.BytesIO(await file.read()))
    image = np.asarray(image.resize((32, 32)))
    image = np.expand_dims(image, axis=0)
    image = image / 255.0
    prediction = cifar_model.predict(image)
    predicted_class = np.argmax(prediction.squeeze())
    return {"predicted_class":CIFAR_CLASSES[predicted_class]}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
