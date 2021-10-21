// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Insert Title:',
    name: 'title',
  },
  {
    type: 'list',
    message: 'Insert License:',
    name: 'license',
    choices: ['MIT', 'Apache', 'Mozilla Public License 2.0', 'Boost Software License', 'Unlicense', 'None'],
  },
  {
    type: 'input',
    message: 'Insert Description/Overview:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Insert Authors:',
    name: 'authors',
  },
  {
    type: 'input',
    message: 'Insert Github Username:',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Insert Preview Link:',
    name: 'preview',
  },
  {
    type: 'input',
    message: 'Insert Features/Tech:',
    name: 'features',
  },
  {
    type: 'input',
    message: 'Insert Installation Instruction:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Insert Usage Information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Insert Test Instructions:',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Add Contribution Guidelines:',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Insert Email Address:',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Insert Known Bugs:',
    name: 'bugs',
  },

];


// function to write README file
function writeToFile (finalReadme) {
  fs.writeFile('generatedREADME.md', finalReadme, (err) => 
  err ? console.log("Error") : console.log('README.md file has been generated.')
  );
}


// function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => { 
        const finalReadme = generateMarkdown(response);
        writeToFile(finalReadme);
    })
}

// Function call to initialize app
init();
