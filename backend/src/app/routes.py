from flask import Blueprint
from app.services.gpio_service import turn_led_off, turn_led_on
from app.utils.response_util import create_response

main_routes = Blueprint('main', __name__)

@main_routes.route('/')
def index():
    """
    Landing page of the web app.
    """
    return '''
        <h1>Willkommen zur Raspberry PI Steuerung</h1>
        <p>Nutze das Frontend um über die Schnittstelle zu kommunizieren.</p>
    '''

@main_routes.route('/on')
def led_on():
    """
    Turns LED on
    """
    try:
        turn_led_on()
        return create_response("LED ist jetzt an", "info")
    except Exception as e:
        return create_response(f"Error: {str(e)}", "error", 500)

@main_routes.route('/off')
def led_off():
    """
    Turns LED off
    """
    try:
        turn_led_off()
        return create_response("LED ist jetzt aus", "warning")
    except Exception as e:
        return create_response(f"Error: {str(e)}", "error", 500)