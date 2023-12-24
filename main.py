from fastapi import FastAPI
import uvicorn

import tensorflow as tf
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
model = tf.keras.models.load_model('static/cifar.h5')
@app.get("/")
async def home():
    return {"message": "Welcome to Visionify"}
@app.get("/predict")
async def predict():
    return {"message": "Prediction"}
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

