This was created during my time as a student at Code Chrysalis.

# Project Title
TODO Management API

# Overview
This API provides functionality for TODO management apps.
Using this API, you will be able to do the things described below.

- You can register a TODO in the DB.
- The TODO registered in the DB can be referenced.
- You can update and delete registered TODOs in the DB.

# Specification
Various APIs are available at https://localhost:3000/todos . (In the local environment)
## Scope
For more information, see the Open API [here](https://hayatoiwashita.github.io/api-solo-project/).

- /todos
  - GET: Get the entire TODO list.
  - POST: Register a TODO.
- /todos/:id
  - GET: Get the specified TODO.
  - PATCH: Updates one of the items in the specified TODO.
  - PUT: Replace and update the specified TODO with each resource.
  - DELETE: Deletes the specified TODO.

# Getting Started

## Prerequisites
You must install the following software and make sure that you can execute the command.

- git
- node
- yarn (or npm)
- psql

## Installing
1. Clone this project.
```
$ git clone https://github.com/hayatoiwashita/api-solo-project.git
```
2. Install the modules needed to launch the API.
```
$ yarn install
```
3. Implement the connection information with the DB in /config/config.json.
An example is given below.
```json
{
  "development": {
    "username": "user-name",
    "password": "password",
    "database": "db-name",
    "host": "127.0.0.1",
    "dialect": "postgresql",
    "operatorsAliases": false,
    "logging": false
  }
}
```
4. Launch the API.
```
$ yarn start
```

## Running the tests
1. The table is created in the DB and the test data is submitted.
```
$ yarn sequelize db:migrate --env development
$ yarn sequelize db:seed:all
```
2. Run a unit test.
```
$ yarn test
```
