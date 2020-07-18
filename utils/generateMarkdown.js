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

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)


## Installation

## Usage

## License

This project is based under the ${data.license} license.

## Enhancements

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
