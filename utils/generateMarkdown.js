// Global Variables
const badge = "";
const licenseLink = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      badge = `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    break;
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    break;
    case "Mozilla Public License 2.0":
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    break;
    case 'Boost Software License': 
      badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    break;
    case 'Unlicensed':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) License.`
    break;
    default:
      badge = ''
    break;
  }
  return badge;
}


function renderLicenseSection(license) {
  switch(license) {
    case "MIT":
      licenseLink = `## License 
        This project licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    break;
    case "Apache":
      licenseLink = `## License 
        This project licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).`;
    break;
    case 'Mozilla Public License 2.0':
      licenseLink =  `## License 
        This project licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).`;
    break;
    case 'Boost Software License': 
      licenseLink =  `## License 
      This project licensed under the [Boost Software License](https://www.boost.org/LICENSE_1_0.txt).`;
    break;
    case 'Unlicensed':
      licenseLink = `## 
        This project is not under any kind of license.`;
    break;
  }     
  return licenseLink;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
      ${renderLicenseBadge(data.license)}

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
      ${data.authors}
      [GitHub Profile](https://github.com/${data.username})

    ## Preview
      ${data.preview}

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

    ## Bugs
      ${data.bugs}
  `;
}

module.exports = generateMarkdown;
