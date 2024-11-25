import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

def create_app():
    load_dotenv()

    app = Flask(__name__)
    CORS(app)

    app.config['DEBUG'] = os.getenv('DEBUG') == 'True'
    app.config['HOST'] = os.getenv('HOST')
    app.config['PORT'] = os.getenv('BACKEND_PORT')
    app.config['USE_RELOADER'] = os.getenv('USE_RELOADER') == 'True'


    from app.routes import main_routes
    app.register_blueprint(main_routes)

    return app