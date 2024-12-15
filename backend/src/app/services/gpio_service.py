import logging
from app.config import Config

logger = logging.getLogger(__name__)

if Config.MOCK:
    logger.info("Mock environment detected, using mocked GPIO.")
    from mocks import GPIO as GPIO
else:
    try:
        import RPi.GPIO as GPIO
    except ImportError as e:
        logger.error("Failed to import RPi.GPIO: %s", e)    
        raise


LED_PIN = 10
GPIO.setmode(GPIO.BCM)  
GPIO.setup(LED_PIN, GPIO.OUT)

def turn_led_on():
    GPIO.output(LED_PIN, GPIO.HIGH)

def turn_led_off():
    GPIO.output(LED_PIN, GPIO.LOW)