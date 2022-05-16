// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

 const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description about your project.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: "Choose a license for your application.",
        choices: [ 'MIT', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is yout Github username?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your email address.',
    }

];

// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      }

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
          .then((data) => {
            console.log(data)
            writeToFile('README.md', generateMarkdown({...data}))
})
}

// Function call to initialize app
init();
