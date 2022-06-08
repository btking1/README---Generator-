const fs = require('fs');
const generateReadMe = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [title, description] = profileDataArgs;


// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }

console.log(title, description);

const pageREADME = generateReadMe(title, description);

fs.writeFile('./README.md', pageREADME, err => {
    if (err) throw err;

    console.log('README complete! Check out README.md to see the output!');
});