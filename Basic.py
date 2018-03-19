from flask import Flask, request, Response, jsonify
from wit import Wit
import sys

app = Flask(__name__)

ZOMATO_TOKEN = "a82df527166f0a92f9163d7412377025"
BASE_TOKEN = "FT2YCL5E3TAYDN7KURQUSXILWBQF2E4N"
@app.route('/', methods=['POST', 'GET'])
def index():
    client = Wit(BASE_TOKEN)										#Passes Auth key to the Wit API
    data = request.get_json()										#fetches the data sent as a POST request from the front end into the variable
    query = data.get("query")										#singles out the user input that needs to be processed by Wit API
    resp = client.message(query)									#sends the user input extracted(into the query variable) and stores the response in 'resp' variable
    entities = resp.get("entities")									#The response from the Wit API contains the entities which it has detected from the user input
    location = entities.get("location")[0].get("value")							#This extracts the City (location) which has been detected by the Wit API and stores it in location for furthur use

    z = Zomato(ZOMATO_TOKEN)										#Zomato Authentication by passing token
    zomato_locations = z.location.get_locations(location)						#sends the city name extracted previously to the locations end point to receive 2 parameters furthur required to get recommendations for the particular location
    entity_type = zomato_locations.raw_data.get("location_suggestions")[0].get("entity_type")		
    city_id = zomato_locations.raw_data.get("location_suggestions")[0].get("city_id")
    zomato_suggestions = z.location.get_location_details(city_id,entity_type)				#returns the zomato's suggestions of resturants for the particular location 
    return jsonify(zomato_suggestions.raw_data)								#converts the response into JSON to be sent to the front end for rendering

if __name__ == "__main__":
    app.run(debug=True)
