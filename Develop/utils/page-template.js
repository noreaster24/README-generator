module.exports  = (portfolioData) => {

    return `
    ###${portfolioData.title}
    # ${portfolioData.license}

    # Created by ${portfolioData.name}
    # Link to the repository: https://github.com/${portfolioData.github}

    ## Project Description
    ${portfolioData.description}

    ## Installation Instructions
    ${portfolioData.installation}

    ## Usage Information
    ${portfolioData.usageInformation}

    ## Contribution Guidelines
    ${portfolioData.contributionGuidelines}

    ## Test Procedure
    ${portfolioData.test}
`;
};
