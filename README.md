<h1 align="center">
 Acebook - Team Earth 🌍
</h1>

<p align="center">
This project is our own version of Facebook. In this project, we were tasked with working on an existing application. A significant part of the challenge was to familiarise ourselves with the codebase we inherited, as we worked to **improve and extend** it.
</p>

## 🤝 Our Team
* **[Alina Ermakova](https://github.com/alalinaermakova)**
* **[David Ade](https://github.com/D6link)**
* **[Judith Baidoo](https://github.com/judithbaidoo)**
* **[Roberto Quadraccia](https://github.com/Super-robbin)**
* **[Emily Cowan](https://github.com/Emily-RC)**

## 🚀 Tech stack

**Frontend:**
<img src="https://img.shields.io/badge/Javascript-yellow?logo=javascript"> <img src="https://img.shields.io/badge/HTML-orange?logo=HTML"> <img src="https://img.shields.io/badge/CSS-blue?logo=CSS"> <img src="https://img.shields.io/badge/React-grey?logo=React">

**Backend:**
<img src="https://img.shields.io/badge/MongoDB-green?logo=MongoDB"> <img src="https://img.shields.io/badge/Express-black?logo=Express"> <img src="https://img.shields.io/badge/Node-darkgreen?logo=Node">

## 💻 Running the project

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Rename your fork to `acebook-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies for both the `frontend` and `api` directories.
   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```

> You might get warning messages about the installed dependencies at this point. You can ignore them, as long as the installation process doesn't fail. If the setup fails at this point, don't wait for too long and reach out to your coach.

5. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### How to run the server and use the app (as a human)

1. Start the server application (in the `api` directory)

  **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
   ```
2. Start the front end application (in the `frontend` directory)

  In a new terminal session...

  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/signup` to create a new user.

Then, after signing up, you should be able to log in by going to `http://localhost:3000/login`.

After logging in, you won't see much but you can create posts using PostMan and they should then show up in the browser if you refresh the page.

## 🧪 Running the tests

If you are interested in seeing our tests you can run them locally. 

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

**Note the use of an environment variable for the JWT secret**

```bash
# Make sure you're in the api directory
; cd api

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below. 

#### Running tests for the backend

Run the tests in a new terminal session:

```bash
# Make sure you're in the api directory
; cd api

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run test
```

####  Running tests for the frontend

Start the front end in a new terminal session

```bash
# Make sure you're in the frontend directory
; cd frontend

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
```

Then run the tests in a new terminal session

```bash
# Make sure you're in the frontend directory
; cd frontend

; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm run test
```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`

If you have issues that are not resolved by these tips, please reach out to a coach and, once the issue is resolved, we can add a new tip!

## Additional Resources 

[Trello](https://trello.com/b/oEAZJKK8/acebook-team-earth) 

[Miro](https://miro.com/app/board/uXjVMj20h7U=/?share_link_id=983792734137)

[Notion](https://www.notion.so/Software-Module-3-Acebook-c1888e76cd3e4926a23efa542ea9dc0e?pvs=4) 

## 🫶 Special Thanks
[Makers](https://www.makers.tech/) for giving us the opportunity to work on this cool project on our journey into tech. <br>
Our coach [Claire](https://github.com/ClaireMakers) for guiding and teaching us throughout the project!
