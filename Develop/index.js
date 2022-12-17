//Requiring the generateREADME.js document.
const generateREADME = require("./utils/generateREADME");
//Requiring inquirer
const inquirer = require('inquirer');
//Requiring the file system
const fs = require('fs');

//Questions, prompted to gather info for Readme. 
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",  
    },
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project:',
      name: 'description',
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributing',
    },
  ])
//Answers to prompts are being passed in and calling the generateREADME function from generateREADME.js to organize the answers. 
  .then((answers) => {
    const README = generateREADME(answers);
// Calling the writeFile method to create a Readme.md document with the given answers. 
    fs.writeFile('README.md', README, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
