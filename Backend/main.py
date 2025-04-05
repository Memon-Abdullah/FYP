from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

# Define request body
class InputText(BaseModel):
    text: str

@app.post("/predict")
async def predict(input: InputText):
    moods = ["Happy", "Sad", "Neutral", "Angry"]
    return {"prediction": random.choice(moods)}

@app.get("/")
def read_root():
    return {"message": "MoodMeet API is running!"}
