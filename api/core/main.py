from fastapi import APIRouter
from . import utils, db

router = APIRouter()



@router.get("/")
async def root():
    return utils.return_data(data = None, msg = "博客api正常运行")

@router.get("/post")
async def 获取文章内容(link:str):
    data = await db.posts.find_one({"link": link, "_id": 0})
    return utils.return_data(data)

@router.post("/post")
async def 上传文章(link:str):
    data:list = await db.posts.find({"_id": 0}).to_list(length=100)
    return utils.return_data(data)

@router.get("/postlist")
async def 获取文章列表():
    data = await db.posts.find({"_id": 0}).to_list(length=100)
    return utils.return_data(data)