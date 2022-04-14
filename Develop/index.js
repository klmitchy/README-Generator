// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions {objects} for user input
const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ])

];
    .then((answers) => {
        const generateREADME = {(Title, Description, Installation, Usage, LicenseBadge, Contributions, Tests, Questions,)}
    
        fs.writeFile('README-Gen', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.js!')
        );
      });

// TODO: Create a function to write README file
function writeToFile(`README-Gen`, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app. put inquirere prompt into. look into proper syntax in inquiere documentation. 
//pass thru what your prompting. run the inquirere promts and pass the questions into the promt function into the write to file 
//function(the ReadMe)
init();

What was your motivation?
Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
What problem does it solve?
What did you learn?
What makes your project stand out?