
  
function renderLicenseBadge(license){
  const licenseBadge = {
    apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`, 
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  return licenseBadge[license]
}

function renderLicenseLink(license){
  const licenseLink = {
    apache: `[Apache](https://opensource.org/licenses/Apache-2.0)`,
    isc: `[ISC](https://opensource.org/licenses/ISC)`,
    mit: `[MIT](https://opensource.org/licenses/MIT)`
  }
  return licenseLink[license]
}

// function to take answers from user from the shared index.js file and populate ReadMe
function generateReadMe(answers){
  return `
    
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Table of Countents
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Collaborators](#Collaborators)
  - [Insatllation](#Installation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Installation
  ${answers.instalation}

  ## Collaborators
  ${answers.collaborators}

  # Questions
  ${answers.email}
  ${answers.github}

  ## License
  ${answers.license}
  ${renderLicenseLink(answers.license)}
  `
  }

// exporting the function to index file where questions will be asked
module.exports = generateReadMe



