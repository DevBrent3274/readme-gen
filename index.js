const inquirer = require("inquirer");
fs = require('fs');
const generateReadMe = require(`./readme-gen.js`);

// questions for user to fill out required sections of readme
// and holding feild

let questions = [
  {
    type: "input",
    name: "title",
    default: "<Your-Project-Title>",
    message: "What would you like to title your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a project description:"
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions?"
  },
  {
    type: "input",
    name: "usage",
    message: "Project usage?"
  },
  {
    type: "input",
    name: "credits",
    message: "List any collaborators, third-party assest and tutorials here:"
  },
  {
    type: "input",
    name: "email",
    message: "For questions(email)?"
  },
  {
    type: "input",
    name: "github",
    message: "For questions(github)?"
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like?",
    choices: ["MIT", "ISC","Apache"]
    //filter(val) {
    //  return val.toLowerCase(); origianlly used when user enter without drop list - left in fo rmy notes
  }
];

// askingg the questions
function askQuestions(){
   return inquirer.prompt(questions)
    .then((answers) => {
      // calling function to populate ReadMe with answers
      const markDown = generateReadMe(answers)
      // writing and savinf the ReadMe file
      fs.writeFile('README.md', markDown, function(err) {
        if(err) {
          console.log('Could not save file', err)
        } else {
            console.log('Success, a new README has been created')
          }
        })
      })
    .catch((error) => {
      console.log(error)
    })
}

// 
askQuestions()