const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What iare the installation instructions?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What languages do you know?',
        name: 'instalation',
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'What is the license of this project?',
        name: 'license',
        choices: ['Apache License 2.0','GNU GPLv3', 'MIT', 'ISC License'],
    },
    {
        type: 'input',
        message: 'Provide examples on how to run tests of your application:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Provide examples on how to run tests of your application:',
        name: 'tests',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("Hello");
    inquirer
        // ask user all questions from the questions array
        .prompt(questions)
        // display answers
        .then((data)=>{
        console.log( JSON.stringify(data));
    })
}

// function call to initialize program
init();
