# Trello Clone

This is a Trello clone project built using ReactJS, TypeScript, and Appwrite for the database.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and manage boards, lists, and cards.
- Drag and drop functionality for easy organization.
- Summarize the lists and cards using chatgpt

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/trello-clone.git
   ```

2. Navigate to the project's directory:

   ```shell
   cd trello-clone
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Configure the Appwrite backend:

   - Create an account on [Appwrite](https://appwrite.io/) and set up a new project.
   - Create a `.env` file in the project root and provide the necessary environment variables:

     ```env
     REACT_APP_APPWRITE_ENDPOINT=your-appwrite-endpoint
     REACT_APP_APPWRITE_PROJECT_ID=your-appwrite-project-id
     REACT_APP_APPWRITE_API_KEY=your-appwrite-api-key
     ```

5. Start the development server:

   ```shell
   npm start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Create a new board and add lists and cards to it.
- Drag and drop cards to reorganize them.
- summarize todays lists and cards.

## Technologies

- ReactJS: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript for enhanced development.
- Appwrite: Open-source backend server for building web and mobile apps.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to adhere to the project's code of conduct.

