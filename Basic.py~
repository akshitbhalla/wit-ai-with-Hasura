from flask import Flask
from wit import Wit
import sys

app = Flask(__name__)

BASE_TOKEN = "FT2YCL5E3TAYDN7KURQUSXILWBQF2E4N"
@app.route('/')
def index():
    client = Wit(access_token=BASE_TOKEN)
    resp = client.message('Restaurants near me')
    print(resp)
    return "Working"

if __name__ == "__main__":
    app.run(debug=True)