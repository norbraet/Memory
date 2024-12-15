# Uses Python 3.9 Slim which do not include all standard Libraries. If any additional standard libraries are needed, they need to be installed separately
FROM python:3.9-slim

ARG TARGETENV=dev

# Installs tools that is needed for building the packages and compile pyhton dependecies
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

RUN if [ "${TARGETENV}" = "prod" ]; then \
        apt-get update && apt-get install -y \
        libgpiod2 \
        libgpiod-dev \
        libcamera-dev \
        && rm -rf /var/lib/apt/lists/*; \
    fi

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
COPY requirements.${TARGETENV}.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt

# Set the working directory inside the container
WORKDIR /app

# Copy the entire application into the container
COPY /src/ /app

# Expose the port the app will run on
EXPOSE 5000

# Set the default command to run the app
CMD ["python", "src/run.py"] 