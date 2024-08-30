from pydantic import BaseModel

class User(BaseModel):
    _id: str | None = None
    name: str
    email: str
    hashed_password: str

class Posts(BaseModel):
    _id: str | None = None
    title: str
    content: str
    published: bool = True
    # rating: Optional[int] = None

