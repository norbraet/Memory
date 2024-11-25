try:
    # checks if you have access to RPi.GPIO, which is available inside Raspberry PI
    import RPi.GPIO as GPIO
except:
    # In case of exception, you are executing your script outside of Raspberry PI, so import Mock.GPIO
    from mocks import GPIO as GPIO

LED_PIN = 10
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

def turn_led_on():
    GPIO.output(LED_PIN, GPIO.HIGH)

def turn_led_off():
    GPIO.output(LED_PIN, GPIO.LOW)