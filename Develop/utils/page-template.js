module.exports  = (name, github, title, license, description, installation, usageInformation, contributionGuidelines, test) => {

    return `
    ###${title}
    # ${license}

    # Created by ${name}
    # Link to the repository: https://github.com/${github}

    ## Project Description
    ${description}

    ## Installation Instructions
    ${installation}

    ## Usage Information
    ${usageInformation}

    ## Contribution Guidelines
    ${contributionGuidelines}

    ## Test Procedure
    ${test}
`;
};
