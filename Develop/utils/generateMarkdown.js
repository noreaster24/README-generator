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
function generateMarkdown(title, license, description, installation, usageInformation, contributionGuidelines, test) {
  return `
  ###${data.title}
  # ${data.license}

  # Created by ${data.name}
  # Link to the repository: https://github.com/${data.github}

  ## Project Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usageInformation}

  ## Contribution Guidelines
  ${data.contributionGuidelines}

  ## Test Procedure
  ${data.test}
`;
}

module.exports = generateMarkdown;
