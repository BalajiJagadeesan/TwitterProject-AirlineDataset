#Airline Sentiment Twitter Project PROJECT  

#Introduction
This application allows user to perform various search queries on the available Airline sentiment data collection   

#Functionalities
1.Database Connection Process: 
  The application connects to the database and confirms that connection has been established by means of a pop up window. (Sometimes the connection takes a few seconds)

2.Search Functionality:
	a. It has different web-based search fields that asks user for query strings
	b. The response to the user’s request, provides the user with a list of documents

            --> Keyword search : Supports partial words
            --> ID search : Literal string search
            --> Name search : Supports partial word search
            --> Created time field search : supports search of tweets for a particular day and time (format is specified, also the date is same for all tweets, only the time varies)

		
	c. Once presented with the selection list, by ID, by Name, or other identifying information, the user will be able to select the desired document to view the content.
	d. The user is presented with the option to search again and again until they want.
				
3. Comment Feature:

	The user can add comments to the selected document. comments are stored separately in the document and will show in subsequent retrievals of the document.These comments are linked with the document using the objectId associated with the document.

	 -->User comments can be added to the documents
     -->User comments are retrieved with the document


4. **Additional Features:**

	* Literal word search feature
	* Partial word search capabilities
	* Document list is returned to the user for selection
	* Documentlist includes date and author
	* User can select the document to view and entire selected document is displayed
	* User can exit the list to perform a new search
	* User can exit the detials view to perform a new search


--> Technologies

**BackEnd:** 
MongoDb Database Management System is used as our database.
Expressjs module to create a server application.

**FrontEnd:**
HTML to create views.
AngularJS to create the front end view.
Javascript to 

--> Modules

    -->Express
    -->NodeJs
    -->Mongoose
    -->Bootstrap
    -->Ejs

--> Installation	
--> First
Connect to the database. Change the database URL according to the local mongodDB schema.
To do that,go to 

***path/to/Airline Sentiment/config/database.js*** 

Edit as required

--> Second
Run the database. Run command ***mongod*** in terminal or command prompt to start the mongoDB server.

--> Third

Install the dependencies.run npm install before starting the project. Go to terminal and run this:

***path\to\Airline Sentiment>npm install***

This will resolve all the dependencies listed in package.json file. Once its is done downloading, you should have a node_modules directory which contains all of the required dependencies.

--> Fourth

To run the application, run the command

***path\to\Airline Sentiment>npm start***

This will Start a server which will serve the ***http://localhost:3000/*** url.
 

-->Configuration

* We have bin/www file to configure port for the application.
* congfig/database.js file which has db configuration in it.
* package.json file for listing dependencies

-->Contributors
* Balaji Jagadeshan
* Dhananjay Sherigar
* Harish Alagesan
