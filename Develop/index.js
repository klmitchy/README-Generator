// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. ',
      }
      {
        type: 'input',
        name: 'LicenseBadge',
        message: 'License Info Here',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Go the extra mile and write tests for your application. ',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Provide your Github contact profile here so ppl can reach you with any questions',
      },
    ])

];
    .then((answers) => {
        const generateREADME = {(Title, Description, Installation, Usage, LicenseBadge, Credits, Tests, Questions,)}
    
        fs.writeFile('README-Gen', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });

// TODO: Create a function to write README file
function writeToFile(`README-Gen.md`, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app. put inquirere prompt into. look into proper syntax in inquiere documentation. 
//pass thru what your prompting. run the inquirere promts and pass the questions into the promt function into the write to file 
//function(the ReadMe)
init();




