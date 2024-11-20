# Memory
This project is a Dockerized Python application that uses Flask and RPi.GPIO (for Raspberry Pi GPIO control) for its functionality. It has been containerized using Docker and Docker Compose to make deployment and development easy and consistent across different environments.

## Installation
To get started with this project, you'll need Docker and Docker Compose installed on your system. If you haven't installed Docker yet, please follow the instructions at Docker's official website.

Additionally, make sure you have Docker Compose installed. If you're using Docker Desktop, it comes with Docker Compose preinstalled.

```
git clone https://github.com/norbraet/Memory.git
cd memory
````

## Usage

### Running with Docker Compose
Docker Compose is used to manage multiple containers for this project. It helps define and run multi-container Docker applications, which makes it easier to manage this application and its dependencies.

To start the application, run the following command:
```
docker compose up
````

This will build the Docker image (if necessary) and start the container, mapping port 5000 from the container to port 5000 on your local machine. You can access the application in your browser at:
```
http://localhost:5000
````

To stop the application, use:
```
docker compose down
````

If you want to run the application in the background (detached mode), use:
```
docker compose up -d
````

## Logging
The application uses Python's built-in logging module to log important information, including setup and status updates for GPIO channels, events, and errors. The log level is configurable via the LOG_LEVEL environment variable.

By default, logs are displayed on the console. You can customize the logging level as needed to see more or less detail during development.

