const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: "What's the name of this project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Breifly describe the application:",
        name: 'description'
    },
    {
        type: 'input',
        message: "Tell the user how to install your application:",
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Tell other programmers how to contribute to your project:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Tell users how to test if the application is working:',
        name: 'tests'
    }
]

inquirer
    .prompt(questions)
    .then((response) =>
        console.log(response)
    )