
const inquirer = require('inquirer'); // declare inquirier
const fs = require('fs'); // declare file inpput
const generateMarkdown = require('./generateMarkdown') // file location

// Create array of question for readme file
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter brief project description:"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project(commands)?"
    },
    {
        type: "input",
        name: "usage",
        message: "What usage does this project have?"
    },
    {
        type: "input",
        name: "contribution",
        message: "How can someone contribute to this project?",
     },
    {
        type: 'list',
        message: 'Select project license:',
        name: 'license',
        choices: [
          { value: 'Apache' },   //Apache 2.0 License
          { value: 'BSD3' },  //BSD 3-Clause License
          { value: 'LGPL' },  //GNU LGPL v3
          { value: 'MIT' },  //The MIT License
          { value: 'MPL' }, //Mozilla Public License 2.0
          { value: 'None' }, 
        ]
     },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install the dependencies?",
        default: 'npm i',
    },    
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: 'npm test',
    },    
    {
        type: "input",
        name: "github",
        message: "Enter your github username:"
    },
    {
     type: "input",
     name: "email",
     message: "Enter your email:"
 },
])  // create a function to create readme
     .then((data) => {
          // TODO: Create a function to write README file
          const filename = data.title.replace(' ', "").toLowerCase()
          fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
          err ? console.error(err) : console.log("Your readme has been generated!"))
     })


// Initialize Aplpication
function init() { }

// call the application
init();