
  
// static renderLicenseBadge(License){
// const bagdes = {
//     isc: [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) 
//     mit: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//  }
//  return badges[License]
// }
// ${this.renderLicenseBadge(answers.license)}  put in line 14 when ready
  function generateReadMe(answers){
    return `
  # ${answers.title}



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
  `
  }


module.exports = generateReadMe

// message: "Please choose a copywrite license..",
// choices: ["MIT", "ISC", "XYZ"],
// filter(val) {
//   return val.toLowerCase();
//    }
//  )
// }

