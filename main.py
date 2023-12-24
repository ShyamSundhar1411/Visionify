from fastapi import FastAPI
import uvicorn
import tensorflow as tf
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
@app.get("/")
async def home():
    return {"message": "Welcome to Visionify"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

