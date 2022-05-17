// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  let [licenseLong, licenseCode] = license.split("|");
  return `[![${licenseLong}](https://img.shields.io/badge/license-${licenseLong
    .split(" ")
    .join(
      "%20"
    )}-blue.svg)](https://choosealicense.com/licenses/${licenseCode})`;
}

renderLicenseBadge(`GNU General Public License v3.0|gpl-3.0`);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  let [licenseLong] = license.split("|");
  return `## License
This software is covered by ${licenseLong}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Testing](#testing)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contrib}
## Testing
${data.testing}
${renderLicenseSection(data.license)}
## Questions
Created by [${data.github}](https://github.com/${data.github}).
Contact Email: ${data.email}
Contact Instructions: ${data.contactInstructions}
`;
}

module.exports = generateMarkdown;