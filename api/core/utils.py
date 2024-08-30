def return_data(data: dict | list | None = None, msg: str = "Success", code: int = 200) -> dict:
    """
    Return data with message and status code
    """
    return {
        "code": code,
        "msg": msg,
        "data": data,
    }