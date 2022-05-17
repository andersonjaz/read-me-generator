// TODO: Include packages needed for this application
const { writeFile, fstat } = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Project title required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Description required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions to install your project:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Description required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter how to use your application:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Usage required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contrib",
    message: "How do others contribute to your project?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Contribution guidelines required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "testing",
    message:
      "What tests can be run for your application? Explain how to run them.",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Testing instructions required!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What type of license is your project covered under?",
    choices: [
      {
        name: `Academic Free License v3.0`,
        value: `Academic Free License v3.0|afl-3.0`,
      },
      { name: `Apache license 2.0`, value: `Apache license 2.0|apache-2.0` },
      {
        name: `Artistic license 2.0`,
        value: `Artistic license 2.0|artistic-2.0`,
      },
      {
        name: `Boost Software License 1.0`,
        value: `Boost Software License 1.0|bsl-1.0`,
      },
      {
        name: `BSD 2-clause "Simplified" license`,
        value: `BSD 2-clause "Simplified" license|bsd-2-clause`,
      },
      {
        name: `BSD 3-clause "New" or "Revised" license`,
        value: `BSD 3-clause "New" or "Revised" license|bsd-3-clause`,
      },
      {
        name: `BSD 3-clause Clear license`,
        value: `BSD 3-clause Clear license|bsd-3-clause-clear`,
      },
      {
        name: `Creative Commons license family`,
        value: `Creative Commons license family|cc`,
      },
      {
        name: `Creative Commons Zero v1.0 Universal`,
        value: `Creative Commons Zero v1.0 Universal|cc0-1.0`,
      },
      {
        name: `Creative Commons Attribution 4.0`,
        value: `Creative Commons Attribution 4.0|cc-by-4.0`,
      },
      {
        name: `Creative Commons Attribution Share Alike 4.0`,
        value: `Creative Commons Attribution Share Alike 4.0|cc-by-sa-4.0`,
      },
      {
        name: `Do What The F*ck You Want To Public License`,
        value: `Do What The F*ck You Want To Public License|wtfpl`,
      },
      {
        name: `Educational Community License v2.0`,
        value: `Educational Community License v2.0|ecl-2.0`,
      },
      {
        name: `Eclipse Public License 1.0`,
        value: `Eclipse Public License 1.0|epl-1.0`,
      },
      {
        name: `Eclipse Public License 2.0`,
        value: `Eclipse Public License 2.0|epl-2.0`,
      },
      {
        name: `European Union Public License 1.1`,
        value: `European Union Public License 1.1|eupl-1.1`,
      },
      {
        name: `GNU Affero General Public License v3.0`,
        value: `GNU Affero General Public License v3.0|agpl-3.0`,
      },
      {
        name: `GNU General Public License family`,
        value: `GNU General Public License family|gpl`,
      },
      {
        name: `GNU General Public License v2.0`,
        value: `GNU General Public License v2.0|gpl-2.0`,
      },
      {
        name: `GNU General Public License v3.0`,
        value: `GNU General Public License v3.0|gpl-3.0`,
      },
      {
        name: `GNU Lesser General Public License family`,
        value: `GNU Lesser General Public License family|lgpl`,
      },
      {
        name: `GNU Lesser General Public License v2.1`,
        value: `GNU Lesser General Public License v2.1|lgpl-2.1`,
      },
      {
        name: `GNU Lesser General Public License v3.0`,
        value: `GNU Lesser General Public License v3.0|lgpl-3.0`,
      },
      { name: `ISC`, value: `ISC|isc` },
      {
        name: `LaTeX Project Public License v1.3c`,
        value: `LaTeX Project Public License v1.3c|lppl-1.3c`,
      },
      {
        name: `Microsoft Public License`,
        value: `Microsoft Public License|ms-pl`,
      },
      { name: `MIT`, value: `MIT|mit` },
      {
        name: `Mozilla Public License 2.0`,
        value: `Mozilla Public License 2.0|mpl-2.0`,
      },
      {
        name: `Open Software License 3.0`,
        value: `Open Software License 3.0|osl-3.0`,
      },
      { name: `PostgreSQL License`, value: `PostgreSQL License|postgresql` },
      {
        name: `SIL Open Font License 1.1`,
        value: `SIL Open Font License 1.1|ofl-1.1`,
      },
      {
        name: `University of Illinois/NCSA Open Source License`,
        value: `University of Illinois/NCSA Open Source License|ncsa`,
      },
      { name: `The Unlicense`, value: `The Unlicense|unlicense` },
      { name: `zLib License`, value: `zLib License|zlib` },
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("GitHub username required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What email address can you be reached at?",
    validate: (input) => {
      // Use regex to validate is in email format ([A-z,0-9,_,-]@[A-z,0-9,_,-].[A-z])
      if (input) {
        return true;
      } else {
        console.log("Email address required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contactInstructions",
    message: "Provide instructions for those who wish to reach out to you:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      }

      resolve({
        ok: true,
        message: "File written successfully!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      return generateMarkdown(data);
    })
    .then((markdown) => {
      writeToFile("./NewReadMe/README.md", markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();