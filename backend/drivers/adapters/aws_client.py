import boto3
import json as jsonParser
from domain.battery import BatteryEntry
from config import Config
from os.path import join, dirname
from dotenv import load_dotenv

class AWSClient:
        
    def get_s3_bucket(self):
        # Creating the low level functional client
        client = boto3.client(
            's3',
            aws_access_key_id = Config.AWS_ACCESS_KEY,
            aws_secret_access_key = Config.AWS_ACCESS_SECRET,
            region_name = Config.AWS_REGION
        )

        # Fetch the list of existing buckets
        clientResponse = client.list_buckets()

        return clientResponse['Buckets'][0]["Name"]
        
    def get_latest_voltage(self, bucketname: str):
        # Creating the high level object oriented interface
        resource = boto3.resource(
            's3',
            aws_access_key_id = Config.AWS_ACCESS_KEY,
            aws_secret_access_key = Config.AWS_ACCESS_SECRET,
            region_name = Config.AWS_REGION
        )

        bucket = resource.Bucket(bucketname)
        foundVoltage = False
        for obj in bucket.objects.all():
            body = obj.get()['Body'].read()
            jsonBody = jsonParser.loads(body)
            if 'voltage' in jsonBody:
                batteryEntity = BatteryEntry.create_from_content(obj.key, jsonBody["voltage"])
                foundVoltage = True
            else:
                pass

        if foundVoltage == False:
            Exception('No voltage was found')
  
        return batteryEntity
