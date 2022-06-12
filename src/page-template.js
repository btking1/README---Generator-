module.exports = templateData => {
    console.log(templateData);

    // const {title, description, motivation, installation, usage, screenschot1, credits, license, tests, github, email } = templateData;
    
        return `
# ${templateData.title}
    
## Description
    
${templateData.description}
    
- ${templateData.motivation}
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
    
## Table of Contents (Optional)
    
If your README is long, add a table of contents to make it easy for users to find what they need.
    
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${templateData.installation}
    
## Usage
    
${templateData.usage}

${templateData.screenschot1}


## Test
      
${templateData.tests}
    
## Credits
    
${templateData.credits} 
    
## License
    For more information about the License, click on the link below.
-[License](https://opensource.org/licenses/${templateData.license})

## Questions
    For more information about the project you can go
    to my GitHub page at the following Link:

- GitHub: ${templateData.github}
- Email: ${templateData.email}
`;
};