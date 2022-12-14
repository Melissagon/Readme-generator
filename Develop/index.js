// TODO: Include packages needed for this application
const { default: inquirer } = require("inquirer");
const inqirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require ("fs");
// TODO: Create an array of questions for user input
const questions = [
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
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        let markdown= generateMarkdown(answers)
        fs.writeFile("./dist/readme.md", markdown, error => console.log("Markdown has been generated"))
    })
 }

// Function call to initialize app
init();
