const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const getManagerInfo = () => {
  const questions = [
    {
      type: "input",
      name: "managerName",
      message: "What's the name of the manager?",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employee ID of the manager?",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "What is managers email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers office number?",
    },
  ];

  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
};
getManagerInfo();
