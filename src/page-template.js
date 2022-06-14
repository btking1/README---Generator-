module.exports = templateData => {
    console.log(templateData);

    // https://img.shields.io/github/license/btking1/README-Generator?style=plastic

    // const {title, description, motivation, installation, usage, screenschot1, credits, license, tests, github, email } = templateData;
    
        return `
![LICENSE](https://img.shields.io/github/license/${templateData.github}/${templateData.title}?style=flat-square)
!c
# ${templateData.title}
    
## Description
    
${templateData.description}
    
- ${templateData.motivation}
    
## Table of Contents 
    
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
Distributed under the ${templateData.license} License. See LICENSE.txt for more information.

## Questions
    For more information about the project you can go
    to my GitHub page at the following Link:

- GitHub: ${templateData.github}
- Email: ${templateData.email}
`;
};