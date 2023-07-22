import unittest
from drivers.adapters.aws_client import AWSClient
import drivers.api.battery_controller as bc

class TestAWS(unittest.TestCase):

    def test_get_s3_bucket(self):
        aws_client = AWSClient()
        bucket = aws_client.get_s3_bucket()
        self.assertEqual(bucket, 'eu-s3-arduino', "Should be 'eu-s3-arduino'")

    def test_get_latest_voltage(self):
        aws_client = AWSClient()
        batteryData = aws_client.get_latest_voltage('eu-s3-arduino')
        self.assertEqual(batteryData.voltage, 4.2, "Should be '4.2'")

if __name__ == '__main__':
    unittest.main()
