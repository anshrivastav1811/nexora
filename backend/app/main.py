from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="NEXORA API",
    description="Backend API for NEXORA Agency CMS",
    version="1.0.0"
)

# ===========================
# CORS
# ===========================

origins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://127.0.0.1:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===========================
# Root Endpoint
# ===========================

@app.get("/")
async def root():
    return {
        "project": "NEXORA CMS",
        "version": "1.0.0",
        "status": "Running 🚀"
    }

# ===========================
# Health Check
# ===========================

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from ..models.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="NEXORA API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "NEXORA Backend Running 🚀"
    }