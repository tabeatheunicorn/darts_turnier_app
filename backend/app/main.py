from fastapi import FastAPI
from fastapi.responses import ORJSONResponse
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {"message": "Hello world"}


@app.get("/testdata")
def testdata_sinus():
    ydata = np.sin(np.arange(1e6, dtype=np.int16), dtype=np.float16).tolist()
    return  {"data": ydata}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app=app, host='0.0.0.0')