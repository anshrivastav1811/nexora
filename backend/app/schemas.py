from pydantic import BaseModel

class ProjectCreate(BaseModel):

    name: str
    category: str
    description: str
    live_url: str
    github_url: str
    thumbnail: str


class Project(ProjectCreate):

    id: int

    class Config:
        from_attributes = True