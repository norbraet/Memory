from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

try:
    # checks if you have access to RPi.GPIO, which is available inside Raspberry PI
    import RPi.GPIO as GPIO
except:
    # In case of exception, you are executing your script outside of Raspberry PI, so import Mock.GPIO
    import Mock.GPIO as GPIO


# Init Flask App
app = Flask(__name__)
CORS(app)

# GPIO Setup
LED_PIN = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

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


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)