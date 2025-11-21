from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Bear Bear Lunch Recommender")

# Allow the Angular dev server to call this API during local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/recommendation")
async def get_lunch_recommendation() -> dict[str, str]:
    """Return today's lunch pick. Placeholder until recommendation logic is ready."""
    return {"recommendation": "熊熊还在思考今天吃什么..."}
