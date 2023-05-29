const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is of your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project\'s title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a short description of this project:',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What is the license of this project?',
        name: 'license',
        choices: ['GPLv3', 'MIT', 'Unlincense', "Creative Commons License"],
    },
    {
        type: 'input',
        message: 'What command should be run to install any dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using this repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    //write data into the file
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        // if there's an error log it out, if not say readMe generated!
        err ? console.log(err) : console.log('readMe generated!'))
}

// function to initialize program
function init() {
    //get user input with inquirer
    inquirer
        // ask user all questions from the questions array
        .prompt(questions)
        // after all input is collected, run the writeToFile function
        .then((data) => {
            //save all information in a file called readMe
            writeToFile("generatedReadMe.md", data)
        })
}

// function call to initialize program
init();
