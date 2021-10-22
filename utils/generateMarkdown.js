// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  switch (badge) {
    case 'MIT':
      badge = `![license](https://img.shields.io/badge/License-MIT-yellow))`
    break;
    case 'Apache':
      badge = `![license](https://img.shields.io/badge/License-Apache%202.0-blue)`
    break;
    case "Mozilla Public License 2.0":
      badge = '![license](https://img.shields.io/badge/License-MPL%202.0-brightgreen)';
    break;
    case 'Boost Software License': 
      badge = '![license](https://img.shields.io/badge/License-Boost%201.0-lightblue)';
    break;
    case 'Unlicensed':
      badge = `![license](https://img.shields.io/badge/license-Unlicense-blue).`
    break;
  }
  return badge;
}


function renderLicenseSection(license) {
  switch(license) {
    case "MIT":
      license = `This project licensed under the MIT License.`;
    break;
    case "Apache":
      license = `This project licensed under the Apache 2.0 License`;
    break;
    case 'Mozilla Public License 2.0':
      license = `This project licensed under the Mozilla Public License 2.0.`;
    break;
    case 'Boost Software License': 
    license = `This project licensed under the Boost Software License.`;
    break;
    case 'Unlicensed':
      license = `This project is not under any kind of license.`;
    break;
  }     
  return license;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  ${renderLicenseBadge(data.badge)}

## Description
  ${data.description}

## Table of Contents
  - [Description](#description)
  - [Authors](#authors)
  - [Preview](#preview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Contribution](#contribution)
  - [License](#license)
  - [Bugs](#bugs)

## Authors
  - ${data.authors}
  - [GitHub Profile](https://github.com/${data.username})

## Preview
  ![Preview](${data.preview})

## Features
  ${data.features}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Test
  ${data.test}

## Contribute
  ${data.contribute}
  For additional question feel free to reach out at: ${data.email}

## License
  ${renderLicenseSection(data.license)}

### Bugs
  ${data.bugs}
  `;
}

module.exports = generateMarkdown;
