const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');
const path = ('./utils/generatemarkdown');
var license = [];


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
            name: 'project',
            message: 'What is your project repository name?',
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
            name: 'purpose',
            message: 'What is the purpose of your project?',
            validate: purposeInput => {
                if (purposeInput) {
                    return true;
                } else {
                    console.log('Please enter your project purpose!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: 'What are the features of your project?',
            validate: featuresInput => {
                if (featuresInput) {
                    return true;
                } else {
                    console.log('Please enter your project features!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should be used?',
            choices: ['MIT', 'GPL', 'Apache', 'BSD', 'LGPL']
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
            type: 'confirm',
            name: 'confirmEnchancements',
            message: 'Are there any planned enhancements to be documented for a "Planned Enhancements" section?',
            default: true
        },
        {
            type: 'input',
            name: 'enhancements',
            message: 'Provide some information about enhancements:',
            when: ({ confirmEnchancements }) => confirmEnchancements
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
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        }
    ]);
};








// // function to write README file
// function writeToFile(fileName, data) {
// }
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  
// // ****function to initialize program
// function init() {
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));

// }



// // ****function call to initialize program
// init();

// //call function
// promptUser()
//
// .then(portfolioData => {
//   return generateMarkdown(portfolioData);
// })
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
// })
// .catch(err => {
//   console.log(err);
// });



