// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  ${renderLicenseLink(data.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ![screenshot](${data.screenshot})
  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Questions
  Github: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;