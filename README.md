SETTING UP THE PROJECT LOCALLY

Clone the project from this git repository: https://github.com/murgovska/Hypothesis-Comments
Make sure that you have installed node and npm on your local machine. To check that, execute the following commands:
	node --version
	npm --version
If node and npm are not installed, follow the instructions given on this page in order to complete this step:	
	https://nodejs.org/en/download/package-manager/
Once you have node and npm installed, navigate to the Hypothesis-Comments directory.
On the terminal, execute the command:
	npm install.
This command is looking for the package.json file (in which are defined all the dependencies and packages used for developing the application), creates the node_modules directory and downloads the packages to that directory.
After this command is being executed successfully, run the command:
	npm start
This command is calling the ng serve command which runs a local server with livereload.
In order to view the page, in the browser go to http://localhost:4200
For testing purpose, you can use these login credentials:
	username: hypothesis
	password: pass
, or any username from the data.json file, with password - pass. 
Note: When referencing another user while writing a comment, please use the @ sign. Once you insert @  in the input field, all the users from the database will be listed (by name and username). 