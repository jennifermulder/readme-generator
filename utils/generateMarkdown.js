//add badge here using user input for license
function licenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.install}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contribution}

## Tests

To run tests, run the following command:

${data.tests}

## Questions

For any questions, contact: ${data.email}

`;
}

module.exports = generateMarkdown;
