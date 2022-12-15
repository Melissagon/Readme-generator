// // TODO: Include packages needed for this application
// const { default: inquirer } = require("inquirer");
// //const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
// const fs = require ("fs");
// // TODO: Create an array of questions for user input

// const questions = [
//     {
//         type: "input",
//         message: "What is your GitHub username?",
//         name: "GitHub",
//     },
//     {
//         type: "input",
//         message: "What is your email address?",
//         name: "email",  
//     },
//     {
//         type: "list",
//         message: "What kind of license should your project have?",
//         name: "license",
//         choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
//     },
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(answers => {
//         let markdown= generateMarkdown(answers)
//         fs.writeFile("./dist/readme.md", markdown, error => console.log("Markdown has been generated"))
//     })
//     .then((data) => {
//         console.log (data);
//         fs.writerFile(ReadMe.md)
//     });
//  }

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ GitHub, email, project, description, license, dependencies, tests, repo, contributing  }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
      message: 'Please write a short description of your project.',
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
  .then((answers) => {
    const README = generateREADME(answers);

    fs.writeFile('README.md', README, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
