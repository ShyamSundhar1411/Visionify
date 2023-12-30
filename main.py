from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import tensorflow as tf
from fastapi.staticfiles import StaticFiles
from PIL import Image
import io
import numpy as np

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
async def predict_cifar(file):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    image = image.resize((32, 32))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    predictions = cifar_model.predict(image_array)
    predicted_class = np.argmax(predictions[0])
    return {"predicted_class": predicted_class}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
