// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

    const questions = [
        {
          type: 'input',
          message: "What's the title of your project?",
          name: 'title',
          validate: titleInput => {
            if (titleInput){
              return true;
            } else {
              console.log("Please enter your project title!");
              return false;
            }
          }
        },
        {
          type: 'input',
          message: "Add your name to the Readme",
          name: 'author',
          validate: authorInput => {
            if (authorInput){
              return true;
            } else {
              console.log("Please enter your name!");
              return false;
            }
          }
        },
        {
          type: 'input',
          message: "Write a description for your project",
          name: 'description',
          validate: descriptionInput => {
            if (descriptionInput){
              return true;
            } else {
              console.log("Please enter the description of your project!");
              return false;
            }
          }
        },
        {
          type: 'input',
          message: 'Write out installation instructions',
          name: 'install',
          default: 'npm init -y',
      
        },
        {
            type: 'input',
            message: 'Provide information of application usage',
            name: 'usage',
            default: 'See the steps'

          },
          {
            type: 'input',
            message: 'How can people contribute?',
            name: 'contribute',
            default: 'Read the guidelines'
          },
          {
              type: 'input',
              message: 'If your application has tests, say how to use them here',
              name: 'test',
              default: 'npm test',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHubUser',
            validate: githubInput => {
              if (githubInput){
                return true;
              } else {
                console.log("Please enter your github username!");
                return false;
              }
            }
          },
          {
            type: 'input',
            message:'What is your email address?',
            name:'email',
          },
          {
            type:'list',
            name: 'license',
            message: "What kind of license you are using?",
            choices: [
              'MIT',
              'GNU',
              'Apache 2.0',
              'None'
            ]     
          }
      ];
      
// TODO: Create a function to write README file
function writeToFile(fileName,data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success'));
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
  .then(data => writeToFile("generatedReadMe.md", generateMarkdown(data)));
}
// Function call to initialize app
 init();