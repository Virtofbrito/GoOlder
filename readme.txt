# GoOlder
	
	GoOlder is a NodeJS app used to identify it's users age group.

---------------------------------------------------------------------------------------
## Node Installation & Dependencies	

NodeJs: https://nodejs.org/en/download/ (follow your own operating system instructions)
	You can check your Node version by running in your cmd:
	 ```   
		node -v  

Yarn: https://classic.yarnpkg.com/en/docs/install (follow your own operating system instructions)
	You can check your yarn version by running in your cmd:
	 ```  
		yarn -v 

	```Inside app folder terminal
		
	yarn add express   
	yarn add nunjucks
	yarn add eslint -D
	yarn eslint --init   
	
	```
  	ESLint will ask you to set some configs, so choose:
		1-Check syntax, find problems and enforce code style
		2-CommonJS(require/exports)
		3-If asked about using React, Vue.js or None of these, choose None of these
		4-Node
		5-Use a popular style guide
		6-Standard
		7-JSON format
		8-If asked to npm install the dependencies required, type Y
	
	As you're using Yarn instead of npm, delete the package-lock.json file ESLint have created,
	and run ``` yarn ``` in your terminal so yarn can map the new dependencies.
			
---------------------------------------------------------------------------------------
## Usage:

run 
``` node index.js ```

App must be running on http://localhost:3000/

---------------------------------------------------------------------------------------
## Optional:
	
As a Developer, you can automatize the app refreshing with Nodemon by installing nodemon: 
	```
		yarn add nodemon -D 

And then you'll start your app by running 

	yarn start   instead of    node index.js
