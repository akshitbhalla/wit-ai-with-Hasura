from flask import Flask, request, Response, jsonify
from wit import Wit
import sys

app = Flask(__name__)

BASE_TOKEN = "FT2YCL5E3TAYDN7KURQUSXILWBQF2E4N"
@app.route('/', methods=['POST', 'GET'])
def index():
    client = Wit(BASE_TOKEN)
    data = request.get_json()
    query = data.get("query")
    resp = client.get_message(query)
    return jsonify(resp)

if __name__ == "__main__":
    app.run(debug=True)
