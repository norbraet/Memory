from flask import Flask, jsonify
from flask_cors import CORS


try:
    # checks if you have access to RPi.GPIO, which is available inside Raspberry PI
    import RPi.GPIO as GPIO
except:
    # In case of exception, you are executing your script outside of Raspberry PI, so import Mock.GPIO
    import Mock.GPIO as GPIO

MESSAGE_TYPES = {
    "info": "info",
    "warning": "warning",
    "error": "error"
}

# Init Flask App
app = Flask(__name__)
CORS(app)


# GPIO Setup
LED_PIN = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

def create_response(message, type, status_code=200):
    return jsonify({"status": message, "type": type}), status_code

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

    try:
        GPIO.output(LED_PIN, GPIO.HIGH)
        return create_response("LED ist jetzt an", MESSAGE_TYPES["info"])
    except Exception as e:
        return create_response(f"Error: {str(e)}", MESSAGE_TYPES["error"], 500)

@app.route('/off')
def led_off():
    """
    Turns LED off
    """
    
    try:
        GPIO.output(LED_PIN, GPIO.LOW)
        return create_response("LED ist jetzt aus", MESSAGE_TYPES["warning"])
    except Exception as e:
        return create_response(f"Error: {str(e)}", MESSAGE_TYPES["error"], 500)

@app.teardown_appcontext
def cleanup(exception=None):
    GPIO.cleanup()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)