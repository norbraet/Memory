from flask import Flask, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import psutil

try:
    # checks if you have access to RPi.GPIO, which is available inside Raspberry PI
    import RPi.GPIO as GPIO
except:
    # In case of exception, you are executing your script outside of Raspberry PI, so import Mock.GPIO
    import Mock.GPIO as GPIO


# Init Flask App
app = Flask(__name__)
CORS(app)

# Init Flask SocketIO
socketio = SocketIO(app, cors_allowed_origins="*")

# GPIO Setup
LED_PIN = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

def get_system_stats():
    cpu_usage = psutil.cpu_percent(interval=5)
    ram_total = psutil.virtual_memory().total / 1000000000
    ram_available = psutil.virtual_memory().available / 1000000000
    disk_total = psutil.disk_usage('/').total / 1000000000
    disk_free = psutil.disk_usage('/').free / 1000000000

    disk = f"{round(disk_free, 1)} GB / {round(disk_total, 1)} GB"
    ram = f"{round(ram_available, 1)} GB / {round(ram_total, 1)} GB"
    cpu = f"{cpu_usage} %"
    return {
        "CPU Usage": cpu,
        "RAM": ram,
        "Disk": disk,
    }


@app.route('/')
def index():
    """
    Landingpage of the Web-App
    """

    return '''
        <h1>Willkommen zur Raspberry PI Steuerung</h1>
    '''

@app.route('/on')
def led_on():
    """
    Turns LED on
    """

    GPIO.output(LED_PIN, GPIO.HIGH)
    
    return jsonify({"status": "LED ist jetzt an"})

@app.route('/off')
def led_off():
    """
    Turns LED off
    """

    GPIO.output(LED_PIN, GPIO.LOW)

    return jsonify({"status": "LED ist jetzt aus"})

@app.teardown_appcontext
def cleanup(exception=None):
    GPIO.cleanup()

@socketio.on('connect')
def handle_connect():
    print("Client connected")
    emit('status_update', {'status': 'Connected to WebSocket Server'})

    def send_system_stats():
        while True:
            socketio.emit("system_stats", get_system_stats())
            socketio.sleep(5)
    
    socketio.start_background_task(send_system_stats)

@socketio.on('disconnected')
def handle_disconnect():
    print("Client disconnected")

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True, use_reloader=False)