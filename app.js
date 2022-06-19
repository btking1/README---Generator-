const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./src/page-template");

// Prompt start
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (project title should match GitHub repo name)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
    },
    {
      type: "input",
      name: "motivation",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use",
    },
    // {
    //   type: "input",
    //   name: "screenshoot1",
    //   message:
    //     "add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: [alt text](assets/images/screenshot.png)",
    // },
    {
      type: "input",
      name: "credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
      type: "list",
      name: "license",
      message: "Select license",
      choices: ["MIT", "GPLv2", "Apache", "GPLv3", "AGPLv3"],
    },
    {
      type: "input",
      name: "tests",
      message:
        "Design tests for your project. Then provide examples on how to run them.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "addLinks",
      message: "Any additional links?",
    },
  ]);
};
// Prompt end

// create readme.md 
promptUser()
  .then((answers) => {
    const pageREADME = generateReadMe(answers);

    fs.writeFile("./README.md", pageREADME, (err) => {
      if (err) throw err;

      console.log("README complete! Check out README.md to see the output!");
    });
  });

