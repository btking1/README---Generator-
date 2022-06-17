module.exports = (templateData) => {
  console.log(templateData);

  return `

# ${templateData.title}
![contributors-shield](https://img.shields.io/github/contributors/${templateData.github}/${templateData.title}?style=for-the-badge)
![forks-shield](https://img.shields.io/github/forks/${templateData.github}/${templateData.title}?style=for-the-badge)
![stars-shield](https://img.shields.io/github/stars/${templateData.github}/${templateData.title}?style=for-the-badge)
![issues-shield](https://img.shields.io/github/issues/${templateData.github}/${templateData.title}?style=for-the-badge)
![license-shield](https://img.shields.io/github/license/${templateData.github}/${templateData.title}?style=for-the-badge)

## Description
   
    -${templateData.description}
    -${templateData.motivation}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

${templateData.installation}

## Usage

${templateData.usage}

## Test

${templateData.tests}

## Credits

${templateData.credits} 

## License

Distributed under the ${templateData.license} License. See LICENSE.txt for more information.

## Questions

For more information about the project you can go
to my GitHub page at the following Link:

- GitHub: https://github.com/${templateData.github}/${templateData.title}
- Email: ${templateData.email}
`;
};
