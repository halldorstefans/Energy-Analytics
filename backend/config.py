import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))

load_dotenv(os.path.join(basedir, '.env'))

class Config(object):
    AWS_ACCESS_KEY = os.environ.get('ACCESS_KEY_ID')
    AWS_ACCESS_SECRET = os.environ.get('SECRET_ACCESS_KEY')
    AWS_REGION = os.environ.get('REGION')
