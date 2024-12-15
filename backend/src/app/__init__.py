import logging
from app.config import Config
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from app.services.camera_service import CameraService

def create_app():
    load_dotenv()

    app = Flask(__name__)
    CORS(app)

    app.config.from_object(Config)

    log_level = app.config['LOG_LEVEL']
    config_logger(app, log_level)

    from app.routes import main_routes
    app.register_blueprint(main_routes)

    camera_service = CameraService()

    @app.teardown_appcontext
    def cleanup(exception=None):
        camera_service.release_camera()
    
    return app

def config_logger(app, log_Level='ERROR'):
    console_handler = logging.StreamHandler()
    console_handler.setLevel(log_Level)
    app.logger.setLevel(log_Level)

    app.logger.propagate = False

    formatter = logging.Formatter('[%(asctime)s] %(levelname)s in %(module)s: %(message)s')
    console_handler.setFormatter(formatter)

    app.logger.addHandler(console_handler)

