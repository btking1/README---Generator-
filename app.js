const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of the project?'
        }
    ])
        .then(readMeData => {
            
        } )
        .then(console.log(data));
}
