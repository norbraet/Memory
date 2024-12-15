import os

class Config:
    """
    Base configuration Class
    """
    DEBUG = os.getenv('DEBUG', 'False').upper() == 'TRUE'
    HOST = os.getenv('HOST', '127.0.0.1')
    PORT = os.getenv('BACKEND_PORT', 5000)
    USE_RELOADER = os.getenv('USE_RELOADER').upper() == 'TRUE'
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'ERROR').upper()
    TARGET = os.getenv('TARGET', 'dev')
