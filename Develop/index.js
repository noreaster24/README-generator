// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/page-template');


// TODO: Create an array of questions for user input
const questions = portfolioData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter the title fo your project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your project.',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please describe your project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide instructions describing how to use your project:',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('Please describe your installation instructions.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usageInformation',
                message: 'Provide any usage information required for your project:',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please describe your usage information.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contributionGuidelines',
                message: 'Provide contribution guidelines for your project:',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    } else {
                        console.log('Please describe your contribution requirements.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Describe the required test procedure for your project:',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log('Please describe your test requirements.');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Which license is required for your project?',
                choices: ['option 1', 'option 2', 'option 3']
            }
        ])
};





// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     console.log(writeToFile);
//     generateMarkdown(fileName, data);
// }




// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub user name.');
                    return false;
                }
            }
        }]
    )
};




// Function call to initialize app
init()
    .then(questions)
    .then(portfolioData => {
        const pageMarkdown = generateMarkdown(portfolioData);

        fs.writeFile('./index.md', pageMarkdown, err => {
            if (err) throw new Error(err);

            console.log('Page Created! Check out index.md in this directory to see it!');
        });
    });