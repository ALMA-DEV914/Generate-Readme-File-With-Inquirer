// TODO: Create a function that returns a license badge based on which license is passed in
 // set the license depending on what was chosen

//If there is no license, return an empty string
function renderLicenseBadge(license) {

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}           
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
})
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
     
`;
}
}
module.exports = generateMarkdown;
