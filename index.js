// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');

// DATA

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
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'Other', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'Unlicense', 'BSD 2-clause', 'LGPLv3', 'AGPLv3'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Add a link to your GitHub profile for questions from users:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Add your email address for questions from users:',
        name: 'email'
    }
]

// FUNCTIONS

const handleAnswers = ({ title, description, installation, contributing, tests, license, github, email }) => {
    const data = 
    
`# ${title}

# Table of Contents
    
[Description](#description)
<br>[Installation](#installation)
<br>[Usage](#usage)
<br>[License](#license)
<br>[Contributing](#contributing)
<br>[Test](#tests)
<br>[Questions](#questions)
    
# Description
    
${description}
    
# Installation
    
${installation}
    
# Usage
    
${contributing}
    
# License
    
${license}
    
# Contributing
    
${contributing}
    
# Tests
    
${tests}
    
# Questions
    
Feel free to reach out with any questions at my [GitHub](${github}) or contact me via email at ${email}`

    fs.writeFileSync("./README.md", data);
    console.log("Success! Your file has been created.")
}

function init() {
    console.log("Welcome to he README.md Generator!")
    inquirer
    .prompt(questions)
    .then(handleAnswers); 
}


// USER INTERACTIONS

// INITIALIZATIONS
init();