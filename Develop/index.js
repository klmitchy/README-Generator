// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');


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
      },
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
    
    .then((answers) => {
    
        fs.writeFile(path.join(__dirname, 'dist/README.md'), generateREADME({...answers}), function(err){
          if (err) {
              console.log(err);
          }
          else{
              console.log('addedData');
          }
      })
  })]
      
// TODO: Create a function to write README file
//function writeToFile(`README.md`, data) {}

//const generateREADME = {(Title, Description, Installation, Usage, LicenseBadge, Credits, Tests, Questions,)}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app. put inquirere prompt into. look into proper syntax in inquiere documentation. 
//pass thru what your prompting. run the inquirere promts and pass the questions into the promt function into the write to file 
//function(the ReadMe)
//init()//