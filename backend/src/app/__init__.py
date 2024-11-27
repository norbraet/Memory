import os
from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from dotenv import load_dotenv

socketio = SocketIO(async_mode='eventlet', cors_allowed_origins="*")

def create_app():
    load_dotenv()

    app = Flask(__name__)
    CORS(app)

    app.config['DEBUG'] = os.getenv('DEBUG') == 'True'
    app.config['HOST'] = os.getenv('HOST')
    app.config['PORT'] = int(os.getenv('BACKEND_PORT'))
    app.config['USE_RELOADER'] = os.getenv('USE_RELOADER') == 'True'

    from app.routes.routes import main_routes
    app.register_blueprint(main_routes)

    from app.routes.socketio_events import connect, handle_message, system_stats_request
    socketio.on_event('connect', connect)
    socketio.on_event('message', handle_message)
    socketio.on_event('system_stats_request', system_stats_request)

    socketio.init_app(app)

    return app, socketio