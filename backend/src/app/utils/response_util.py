from flask import jsonify

def create_response(message, type, status_code=200):
    return jsonify({"status": message, "type": type}), status_code