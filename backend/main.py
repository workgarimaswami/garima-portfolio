from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()   # 👈 THIS LINE IS CRITICAL

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def root():
    return {"status": "Backend is running"}

@app.post("/contact")
def contact(data: Contact):
    print("New Message Received:")
    print(data)
    return {"message": "Thanks! Your message has been sent successfully."}
