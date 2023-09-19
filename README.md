# Chuck Norris Joke Application

This is a web application that fetches Chuck Norris jokes from an external API. It allows users to search for jokes by category or using free text.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine.

```
git clone https://github.com/jmacj/chuck-norris-jokes.git
```

2. Navigate to the project directory > server directory.

```
cd chuck-norris-jokes/server
```

3. Install the required dependencies.

```
npm install
```

4. Do step again but in client directory

```
cd ../client
npm install
```

### Starting the Application

1. Start the Node.js server.
```
cd <project directory>/server
node index.js
```
This will start the server at `http://localhost:3000`.


2. Start the Vue.js application.

```
cd <project directory>/client
npm run dev
```

This will start the Vue.js application at `http://localhost:8000`.

## Usage

1. Open your web browser and go to `http://localhost:8000`.
2. You will see a UI with options to select a category or search by free text. You can also click the "Search" button to get a random joke.
