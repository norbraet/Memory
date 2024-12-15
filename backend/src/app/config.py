import os

class Config:
    """
    Base configuration Class
    """
    DEBUG = os.getenv('DEBUG', 'False') == 'True'
    HOST = os.getenv('HOST', '127.0.0.1')
    PORT = os.getenv('BACKEND_PORT')
    USE_RELOADER = os.getenv('USE_RELOADER') == 'True'
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'ERROR').upper()
