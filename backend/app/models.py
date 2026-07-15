from sqlalchemy import Column, Integer, String, Text
from backend.models.database import Base

class Project(Base):

    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(255), nullable=False)

    category = Column(String(100))

    description = Column(Text)

    live_url = Column(String(255))

    github_url = Column(String(255))

    thumbnail = Column(String(255))

    from sqlalchemy import Column, Integer, String
from ..models.database import Base


class Admin(Base):

    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String, unique=True)

    password = Column(String)