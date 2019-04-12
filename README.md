![CF](http://i.imgur.com/7v5ASc8.png) LAB 18
=================================================

## Lab 19
### Chris Merritt
### Links and Resources

* [File Module]()
* [Logger Module]()
* [Server Module]()
* [API Server Module]()

[![Build Status](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-19.svg?branch=master)](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-19)

### Modules

* Logger Module:
  * Adds the events to be logged in the console once they are recognized.

* Server Module:
  * Starts the message queue server and tells the namespace 'database' to look for the events:
      * file-save
      * file-error
      * create
      * read
      * update
      * delete

* API Server Module:
  * Additional functionality:
    * Routes:
      Added a publish method to each of the routes (handleGetAll.js, handleGetOne.js, handleCreate.js, handleUpdate.js, handleDelete.js) and the error handler (500.js)

* app.js:
  * readIn:
    Reads a file and returns a promise.

  * writeOut:
    Write to a file and return a promise.
    
  * toUpper:
    Change a string to uppercase then a Buffer.
    
  * alterFile:
    Function to wrap all the promises and run the function. Writes to the client on completion or on error.

* logger.js:
  * Listen for file-error and file-save then log them.

* server.js:
  * Start a socket.io server, then listen for file-error and file-save.


### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db
#### Running the app
* `npm app.js files/test.txt`
* `nodemon logger.js`
* `nodemon server.js`

#### UML
![UML](./lab18.jpg)