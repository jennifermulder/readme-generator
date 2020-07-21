const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

//question object
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project repository name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a short description of your project?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should be used?',
            choices: ['MIT', 'GPL', 'Apache', 'BSD', 'LGPL'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter your project license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the installation command!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter the test command!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter the usage details!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter the contribution details!');
                    return false;
                }
            }
        },
    ]);
};


// function to write README file using location and generateMarkdown template
function writeToFile(fileName, data) {
    //write file in path created from current working directory
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init(){
    promptUser()
    .then(readmeData => {
        return writeToFile("sampleREADME.md", generateMarkdown({ ...readmeData }))
    })
    .catch(err => {
        console.log(err);
    });
}

// function call to initialize program
init();
