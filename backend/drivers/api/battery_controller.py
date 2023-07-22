from flask import Flask, json
from drivers.adapters.aws_client import AWSClient

app = Flask(__name__)

@app.route("/")
def get_battery_details():

    aws_client = AWSClient()

    try:
      bucket = aws_client.get_s3_bucket()
    except:
      return json_response('Something went wrong on our end. Try again', 500)

    try:
      battery_entity = aws_client.get_latest_voltage(bucket)
    except Exception as err:
      return json_response(err, 404)
    except:
      return json_response('Something went wrong on our end. Try again', 500)

    return json_response(battery_entity)

def json_response(payload, status=200):
  return (json.dumps(payload), status, {'content-type': 'application/json'})