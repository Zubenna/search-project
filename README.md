# Overview
This is a search page that uses torre api to pull information from torre website. When the project is set up and running, the user can enter the name of the person to be searched in the search bar. While the user is typing the name, the app filters the list according to the letters in the name. Ten simmilar names are listed as the user searches. From the listed user, the searcher can now select and click the identified user he wants. The app has a backend built with NodeJS to handle the route and call the torre api to retrieve the list of matched users. The front end is built with ReactJs to accept the user input and pass it to the backenf for searching and filtering. When you clicked on the identified user, it will take you to the page for the users genome.

# Test App Locally
Get a local copy of the file. Clone with HTTPS following the steps below.

### For Windows
- In your search box, type cmd, click on cmd to open the command prompt.

### For Linux, Mac OS
- In your search box, type terminal, click on the terminal to launch it.

### Clone the Repository
- Copy and paste the command below in your terminal and press enter from your keyboard.
```
git clone https://github.com/Zubenna/search-project.git
```
## Access Project Folder 
- Depending on where the project folder is downloaded, either Hard Disk(HDD), Desktop or Documents directory in your computer after completing the step above.
- Double click on the folder search-project to open it.
- Inside the folder, right-click and click on terminal or cmd depending on your Operating System to open it.

## Set Up Project Locally in Your Computer
- Navigate to the server directory from the root directory with the command below
```
cd server
```
- Run the command below
```
npm install
```
- Wait for some time to install all the app packages and dependencies.
- Once the installation is completed.
- Type the command below in your cmd or terminal to start the NodeJs server.
```
npm start
```
- Again, from the root directory, repeat the process below for the searchpage directory.

- Navigate to the searchpage directory from the root directory with the command below
```
cd searchpage
```
- Run the command below
```
npm install
```
- Wait for some time to install all the app packages and dependencies.
- Once the installation is completed.
- Type the command below in your cmd or terminal to start the NodeJs server.
```
npm start
```
- Once the react app is started, you will see the project opening a different tab on your browser at port http://localhost:3000/. The page now displays the search page for you to start testing the application.

## Built With (Packages and tools)
- React
- JavaScript
- React-DOM
- React-Create-App
- Redux
- npm
- NodeJs
- Axios
- CSS
- Eslint
- Stylelint

## Author
👤 **Nnamdi Emelu**
- Github: [zubenna](https://github.com/zubenna)
- Twitter: [@zubenna](https://twitter.com/zubenna)
- Linkedin: [nnamdi-emelu](https://www.linkedin.com/in/nnamdi-emelu/)


