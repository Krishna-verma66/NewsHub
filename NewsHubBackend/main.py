from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import requests
import os


load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

apiKey = os.getenv('API_KEY')
apiKey2 = os.getenv('API_KEY_SEC')

@app.get("/")
def home():
    return {"message": "FastAPI is working"} 

@app.get("/news")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data

@app.get("/news/all")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=world&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data

@app.get("/news/business")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=business&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data


@app.get("/news/technology")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=technology&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data


@app.get("/news/health")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=health&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data


@app.get("/news/sports")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=sports&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data


@app.get("/news/entertainment")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=entertainment&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data


@app.get("/news/science")
def get_news():
    
    url = f"https://gnews.io/api/v4/top-headlines?lang=en&category=science&apikey={apiKey2}"
    response = requests.get(url)
    data = response.json()

    return data


@app.get("/news/search")
def get_news(query : str):
    
    url = f"https://gnews.io/api/v4/search?q=\"{query}\"&lang=en&max=10&apikey={apiKey2}"
    response = requests.get(url)

    data = response.json()

    return data
