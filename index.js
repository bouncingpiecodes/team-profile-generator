const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
        choices: ["engineer", "intern"],
      },
    ])
    .then((answers) => {
      if (answers.option === "engineer") {
        createEngineer();
      } else if (answers.option === "intern") {
        createIntern();
      }
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
