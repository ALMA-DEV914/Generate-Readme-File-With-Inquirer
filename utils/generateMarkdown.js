// TODO: Create a function that returns a license badge based on which license is passed in
 // set the license depending on what was chosen
const fs = require("fs");
//If there is no license, return an empty string
function renderLicenseBadge(license) {
      // set the license depending on what was chosen
  if(license == 'MIT')
  {
    return `
    [![MIT License](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`

  }
  else if (license == 'GNU'){
    return `
   [![GNU License](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`

      // Display the file content 
  }
  else if(license == 'Apache 2.0')
  {
    return `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license == "NONE"){
    return ` ""`;
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
      // set the license depending on what was chosen
      if(license == 'MIT')
      {
        
      return ` https://opensource.org/licenses/MIT`
        
      }
      else if (license == 'GNU')
      {
        return `https://opensource.org/licenses/GPL-3.0`
          
      }
      // if Apache 2.0 license
      else if(license == 'Apache 2.0')
      {
        return `https://opensource.org/licenses/Apache-2.0`

      }
      // Display the file content 
      else if(license == 'None')
      {
        
        return` ""`;
  
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {        

  // set the license depending on what was chosen
  if(license == 'MIT')
  {
    genLicense = fs.readFileSync('MIT.txt', 'utf-8');
    return `${genLicense}`
     
  }
  else if (license == 'GNU')
  {
    // Use fs.readFileSync() method to read the file 
    genLicense = fs.readFileSync('GNU.txt', 'utf-8');
    return `${genLicense}`
      // Display the file content 
  }
  else if(license == 'Apache 2.0')
  {
    genLicense = fs.readFileSync('Apache.txt', 'utf-8')
    return `${genLicense
    }`
  }
  else if(license == "NONE"){
    genLicense =  "";
  }
}
renderLicenseSection();
renderLicenseBadge();
renderLicenseLink();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   // set the variables for the readME
   const fileName = 'GeneratedReadMe.md';
    
   // set the profile for the readME
   const profile = "https://github.com/" + data.gitHubUser;
   const projectRepo = "https://github.com/" + data.gitHubUser/ + data.repoName;
   // create the contents for the readME
 return `# ${data.title}
This project is licensed under the ${renderLicenseBadge(data.license)}.

This is the license link ${renderLicenseLink(data.license)}.
 

## Description:
${data.description}
   
   
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
   
## Installation
${data.install}

## Usage
${data.usage}
Install node.js, download the file in your computer and open in VS code or terminal. Run node index.js and answer all the questions.
![See the steps](assets/images/step1.png)
![See the steps](assets/images/step2.png)
![See the steps](assets/images/step3.png)

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribute}
[Covenant Contributor](https://www.contributor-covenant.org/)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Tests
${data.test}
Git clone ${data.repoName}
## Questions
For questions please contact: ${data.author}
at  ${data.email}

Github Profile: ${profile} `
}
module.exports = generateMarkdown;
