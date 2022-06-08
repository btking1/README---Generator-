const fs = require('fs');
const inquirer = require('inquirer');
<<<<<<< HEAD
const generateReadMe = require('./src/page-template');
=======
// const generateReadMe = require('./src/page-template');
>>>>>>> develop

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
<<<<<<< HEAD
    ])
}
=======
    ]);
};

       
>>>>>>> develop
