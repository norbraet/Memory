import psutil
import logging
from app import socketio

logger = logging.getLogger(__name__)

def connect():
    print("A client has connected")
    socketio.emit('response', {'data': 'Welcome! You are connected.'})

def send_system_stats():
    while True:
        stats = get_system_stats()
        socketio.emit('system_stats', stats)
        socketio.sleep(1)

def system_stats_request():
    socketio.start_background_task(send_system_stats)

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

def handle_message(message):
    logger.info(message)
    print("Received message: ", message)

    