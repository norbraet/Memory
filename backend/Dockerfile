# Uses Python 3.9 Slim which do not include all standard Libraries. If any additional standard libraries are needed, they need to be installed separately
FROM python:3.9-slim

# Installs tools that is needed for building the packages
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Libraries
RUN pip install --upgrade pip
RUN pip install flask flask-cors RPi.GPIO

WORKDIR /app

COPY src/ /app/src

CMD ["python", "src/main.py"] 