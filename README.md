# Memory
This project is a Dockerized Python application that uses Flask and RPi.GPIO (for Raspberry Pi GPIO control) for its functionality. Additionally, it features a React-based frontend for an improved user interface. The project has been containerized using Docker and Docker Compose to make deployment and development easy and consistent across different environments.

## Project Structure

The project is divided into two main components:

1. Backend: A Flask-based Python application that handles GPIO control and serves the API endpoints.
2. Frontend: A React-based user interface to interact with the backend.

## Installation
To get started with this project, you'll need Docker and Docker Compose installed on your system. If you haven't installed Docker yet, please follow the instructions at Docker's official website.

Additionally, make sure you have Docker Compose installed. If you're using Docker Desktop, it comes with Docker Compose preinstalled.

```
git clone https://github.com/norbraet/Memory.git
cd Memory
````

### NVM
Using NVM is highly recommended for managing Node.js versions locally, ensuring consistency across different environments.


#### Windows
1. Visit the official GitHub page for nvm-windows.
2. Download the latest nvm-setup.zip and follow the installation instructions.
3. Before installing Node.js, check the ``.nvmrc`` file located in the ``frontend`` folder. This file specifies the Node.js version required for the project.

Replace ``<Node Version>`` with the version specified in ``.nvmrc``.
```
nvm install <Node Version>
````

To verify that NVM is installed, run:
````
nvm --version
````


After installing the correct Node Version, navigate to the ``frontend`` folder and execute:

````
nvm use <Node Version>
````

#### macOS 

To install NVM on macOS, follow these steps:

1. Install NVM using Homebrew:
````
brew install nvm
````

2. Verify that NVM was successfully installed:
````
nvm --version
````

3. Navigate to the ``frontend`` folder and execute:

````
nvm use
````

This command will automatically use the Node.js version specified in the ``.nvmrc`` file.

## Usage

### Running with Docker Compose
Docker Compose is used to manage multiple containers for this project. It helps define and run multi-container Docker applications, which makes it easier to manage this application and its dependencies.

To start the application, run the following command:
```
docker compose up
````
This will:

1. Start the backend on http://localhost:5000
2. Start the frontend on http://localhost:3000

The actual port is defined in the `.env` at the root directory.

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

## Commitlint and Husky Setup

Husky is set up to run pre-commit hooks, including Commitlint to validate commit messages and Lint-staged to automatically format files before committing.

### Setup
To install Husky and Commitlint locally, run at the root level:

```
npm install
````

This will set up the pre-commit hooks and install necessary dependencies.

### Commit Message Rules
Commit messages must follow the Conventional Commits format. Any commit message that does not follow this format will be rejected by Commitlint.

## Lint-Staged and Prettier
Lint-staged ensures that Prettier is run on all staged files that are frontend-related (i.e., .js, .jsx, .ts, .tsx files). This will format your code before committing, ensuring consistent code style across the project.