from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import main

app = Fastapi()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(main.router)