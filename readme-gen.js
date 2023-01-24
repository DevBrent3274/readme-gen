
  
function renderLicenseBadge(license){
  const licenseBadge = {
    Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`, 
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  return licenseBadge[license]
}

function renderLicenseLink(license){
  const licenseLink = {
    Apache: `[Apache](https://opensource.org/licenses/Apache-2.0)`,
    ISC: `[ISC](https://opensource.org/licenses/ISC)`,
    MIT: `[MIT](https://opensource.org/licenses/MIT)`
  }
  return licenseLink[license]
}

// function to take answers from user from the shared index.js file and populate ReadMe
function generateReadMe(answers){
  return `
    
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Insatllation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Questions](#Questions)
  - [License](#License)

  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

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



