module.exports = templateData => {
    console.log(templateData);

    // https://img.shields.io/github/license/btking1/README-Generator?style=plastic

    // const {title, description, motivation, installation, usage, screenschot1, credits, license, tests, github, email } = templateData;
    
        return `
![LICENSE](https://img.shields.io/github/license/${templateData.github}/${templateData.title}?style=flat-square)
[contributors-shield]: https://img.shields.io/github/contributors/${templateData.github}/${templateData.title}?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
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