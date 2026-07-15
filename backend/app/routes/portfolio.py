from fastapi import APIRouter

router = APIRouter(
    prefix="/portfolio",
    tags=["Portfolio"]
)

@router.get("/")
def get_projects():

    return {
        "message":"Portfolio API Working 🚀"
    }