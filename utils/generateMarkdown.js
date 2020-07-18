// function licenseBadge(license) {
//   if (license)
// }

const generateEnhancements = enhancementsText => {
  if (!enhancmentsText) {
    return '';
  }

  return `
    ${enhancementsText}
  `;
};
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${(data.license)}

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
