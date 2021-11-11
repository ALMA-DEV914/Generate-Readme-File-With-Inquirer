// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

    const questions = [
        {
          type: 'input',
          message: "What's the title of your project?",
          name: 'title',
        },
        {
          type: 'input',
          message: "Add your name to the Readme",
          name: 'author',
        },
        {
          type: 'input',
          message: "Write a description for your project",
          name: 'description',
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
          },
          {
            type: 'input',
            message: 'How can people contribute?',
            name: 'contribute',
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
              'None'
            ]      }
    
    
      ]
    
      function generatePage() {
        inquirer.prompt(questions)
      .then((response)=> {
        console.log(response)
    
        // set the license depending on what was chosen
        if(response.license == 'MIT')
        {
          genLicense = fs.readFileSync('MIT.txt', 'utf-8')
          licenseBadge = `[![MIT License](https://img.shields.io/badge/license-${response.license}-blue.svg)](#license)`
    
        }
        else if (response.license == 'GNU')
        {
          // Use fs.readFileSync() method to read the file 
          genLicense = fs.readFileSync('GNU.txt', 'utf8') 
    
          licenseBadge = `[![GNU License](https://img.shields.io/badge/license-${response.license}-blue.svg)](#license)`
    
            // Display the file content 
        }
        else if(response.license == 'None')
        {
          genLicense = 'No license specified'
          licenseBadge = `[![GNU License](https://img.shields.io/badge/license-${response.license}-blue.svg)](#license)`
    
        }
    
        // set the variables for the readME
        const fileName = 'GenerateReadMes\\ReadMe.md'
    
        // set the profile for the readME
        const profile = "https://github.com/" + response.gitHubUser
    
        // create the total contents for the readME
        let readContents = `# ${response.title}
    This project is licensed under the ${licenseBadge} .
        
    ## Description:
    ${response.description}
        
        
    ## Table of contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
        
    ## Installation
    ${response.install}
    ## Usage
    ${response.usage}
    ## License
   ${genLicense}
    ## Contributing
    ${response.contribute}
    ## Tests
    ${response.test}
    ## Questions
    For questions please contact: ${response.author}
    at  ${response.email}
    Github Profile: ${profile} `
    
    
    
    fs.writeFile(fileName, readContents, (err) => err ? console.log(err) : console.log('Success'))
      });
      }
    
    // run it to generate readME
    generatePage()
    
      
// TODO: Create a function to write README file
//function writeToFile(fileName,data) {}
    
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
 //init();