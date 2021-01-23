// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

// ADDING IN TEMLATE CODE

const inquirer = require("inquirer");
const fs = require("fs");
//const questions = [];

const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "webpage",
      message: "What is your project GitHub link?",
    },
    {
      type: "input",
      name: "info",
      message: "Brief summary of you project:",
    },
    {
      type: "checkbox",
      message: "What technologies did you use?",
      name: "technologies",
      choices: ["HTML", "CSS", "JavaScript", "MySQL", "React"],
    },
    {
      type: "input",
      name: "criteria",
      message: "Provide your project acceptance criteria:",
    },
    {
      type: "input",
      name: "features",
      message: "List of project features",
    },
    {
      type: "input",
      name: "todo",
      message:
        "Items you need to finish or want to accomplish in the feauture for your project:",
    },
    {
      type: "checkbox",
      message: "What is your projcet status?",
      name: "status",
      choices: ["_in progress_", "_complete_"],
    },
    {
      type: "input",
      message: "Your Github username:",
      name: "github",
    },
    {
      type: "input",
      message: "Your E-mail:",
      name: "email",
    },
    {
      type: "input",
      message: "Your E-mail:",
      name: "sources",
    },
  ])
  .then((response) => {
    data = `
     

    # Project Name

    ${response.name}

    \`\`\`  
    ## Webpage Link 

    ${response.webpage}
    
    \`\`\`
    ## Table of contents

    * [General info](#general-info)
    * [Screenshots](#screenshots)
    * [Technologies](#technologies)
    * [Acceptance Criteria](#acceptance*criteria)
    * [Features](#features)
    * [Status](#status)
    * [Sources](#sources)
    * [Contact](#contact)

    ## General info

    ${response.info}

    \`\`\`
    ## Screenshots

    ![Screen Shot 1](assets/images/screenshot1.png)
    ![Screen Shot 2](assets/images/screenshot2.png)
    ![Screen Shot 3](assets/images/screenshot3.png)

    ## Technologies

    ${response.technologies}

    ## Acceptance Criteria
    
    ${response.criteria}
    

    ## Features

    List of features ready and TODOs for future development

    ${response.features}

    ## To-do list

    ${response.todo}

    ## Status

    Project is: ${response.status} 

    ## Sources

    ${response.sources}
    
    ## Contact

    Created by Mariah Rivera
    * [GitHub](https://github.com/${response.github})
    * [E-mail](mailto:${response.email})

      `;

    // TODO: Create a function to write README file

    fs.appendFile("GeneratedReadMe.md", data, (err) =>
      err ? console.error(err) : console.log("Success ReadMe.md Created!")
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
