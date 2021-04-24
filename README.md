# README #

### What is this repository for? ###

* Quick summary
This application is an airline management system

### How do I get set up? ###

* Summary of set up
* Dependencies
  - Nodejs
  - MongoDb
  - postgres

* Configuration
	-	Clone the repo https://github.com/kazeem08/airline-management-system.git
	-	Run npm install, to install dependencies.
  - Create .env files and add the variables(an env sample file is provided)
	-	Run npm start, to start the app


	###	Thought Process
  - The application is built in a way whereby every other things is related to the flight Model. 
    I had in mind the application should be able to handle different operations. From booking flights, 
    changing flight status(delayed, cancelled e.t.c), creating and tracking bookings, customer details, crew members.

  - The controllers handle the whole processing(CRUD operations)

  - The services folder will handle the data processing, logic etc

  - The lib folder will contain helper functions and the database connection


### Who do I talk to? ###

* Kazeem Jimoh <kazeem0825@gmail.com>
