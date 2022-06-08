const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/page-template');


const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Design tests for your project. Then provide examples on how to run them.'
        }
    ])
    
};
     
        
const contactInfo = contactData => {
    console.log(`
    =================
      Contact Info
    =================
   `);
//    if no contact info
   
    contactData.contact = [];

    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'   
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'addLinks',
            message: 'Any additional links?'
        }
        
    ])
    .then(contData => {
      contactData.contact.push(contData);
      return contactData;
    })
    
};

promptUser()
    .then(contactInfo)
    .then(contactData => {
    const pageREADME = generateReadMe(contactData);

// fs.writeFile('./README.md', pageREADME, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// })

    });