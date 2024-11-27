from app import create_app


app, socketio = create_app()

if __name__ == '__main__':
    socketio.run(
        app,
        host=app.config['HOST'], 
        port=app.config['PORT'], 
        debug=app.config['DEBUG'], 
        use_reloader=app.config['USE_RELOADER']
    )