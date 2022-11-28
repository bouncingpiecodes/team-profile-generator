const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const engineers = [];
const interns = [];
let manager;

const getManagerInfo = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What's the name of the manager?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee ID of the manager?",
    },
    {
      type: "input",
      name: "email",
      message: "What is managers email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers office number?",
    },
  ];

  inquirer.prompt(questions).then((data) => {
    console.log(data);
    manager = new Manager(data.id, data.name, data.email, data.officeNumber);
    createTeamMenu();
  });
};

const createTeamMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Who would you like to add to the team?",
        choices: ["engineer", "intern", "done"],
      },
    ])
    .then((answers) => {
      if (answers.option === "engineer") {
        createEngineer();
      } else if (answers.option === "intern") {
        createIntern();
      } else {
        generateWebpage();
      }
    });
};
const generateWebpage = () => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>team</title>
  </head>
  <body>
    <h1>My Team</h1>
    <div class="container">
       ${[manager, ...engineers, ...interns].map((person) => {
         return `<div class="card">
        <div class="card-header">
          <h2>Kara</h2>
          <h2>Role: ${person.getRole()}</h2>
        </div>
        <div class="card-content">
          <div class="card-property">id: ${person.getId()}</div>
          <div class="card-property">email: <a href="mailto:${person.getEmail()}"> ${person.getEmail()}</a> </div>
          <div class="card-property">${
            person.getRole() === "Manager"
              ? `office number: ${person.getOfficeNumber()}`
              : ""
          } 
          ${
            person.getRole() === "Engineer"
              ? `github: <a href="https://github.com/${person.getGithub()}">${person.getGithub()}</a>`
              : ""
          }
          ${
            person.getRole() === "Intern" ? `school: ${person.getSchool()}` : ""
          }</div>
        </div>
      </div>`;
       })}
      
    </div>
  </body>
</html>
`;
  fs.writeFileSync("./dist/index.html", html);
  fs.copyFile("./style.css", "./dist/style.css", (error) => {
    return null;
  });
};
const createEngineer = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What's the name of the engineer?",
    },
    {
      type: "input",
      name: "id",
      message: "What's the id of the engineer?",
    },
    {
      type: "input",
      name: "email",
      message: "What's the email of the engineer?",
    },
    {
      type: "input",
      name: "github",
      message: "What's the GitHUb username for the engineer?",
    },
  ];
  inquirer.prompt(questions).then((data) => {
    engineers.push(new Engineer(data.id, data.name, data.email, data.github));
    createTeamMenu();
  });
};

const createIntern = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What's the name of the intern?",
    },
    {
      type: "input",
      name: "id",
      message: "What's the ID of the intern?",
    },
    {
      type: "input",
      name: "email",
      message: "What's the email address for the intern?",
    },
    {
      type: "input",
      name: "school",
      message: "What's the school of the intern?",
    },
  ];
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    interns.push(new Intern(data.id, data.name, data.email, data.school));
    createTeamMenu();
  });
};

getManagerInfo();
