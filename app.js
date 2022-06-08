const inquirer = require('inquirer');
// const fs = require('fs');
// const generateReadMe = require('./src/page-template');

// const pageREADME = generateReadMe(title, description);

// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        }
    ])
     .then(answers => console.log(answers));