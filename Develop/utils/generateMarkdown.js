// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).";
  } else if (license === "Apache 2.0") {
    return "This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).";
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.name}

 ${licenseBadge}

 ## Description

 ${data.description}

 ## License

 ${licenseSection}

 ## Installation

 ${data.dependencies}

 ## Usage

 ${data.repo}

 ## Contributing

 ${data.contributing}

 ## Tests

 ${data.tests}

 ## Questions

 - GitHub: [${data.name}](https://github.com/${data.name})
 - Email: ${data.email}
 `;
}

module.exports = generateMarkdown;
