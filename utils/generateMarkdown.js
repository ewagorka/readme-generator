// function to generate markdown for README
function generateMarkdown(data) {

  //initiate vaiable to store license badge image link
  let licenseBadge ="";

  //check license and choose the right icon badge
  switch(data.license){
    case "GPLv3":
      licenseBadge='https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case "MIT":
      licenseBadge = 'https://img.shields.io/badge/License-MIT-blue.svg';
      break;
    case "Unlicense":
      licenseBadge = 'https://img.shields.io/badge/License-Unlicense-blue.svg';
      break;
    case "Creative Commons License":
      licenseBadge = 'https://img.shields.io/badge/License-CC--0-blue.svg';
      break;
    default:
      licenseBadge = 'https://img.shields.io/badge/License-Unlicense-blue.svg';
      break;
  }


  return `# ${data.title}
  
  ![Github license](${licenseBadge})

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

  To install necessary dependecies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  
  What you should know before using this app: 
  ${data.usage}

  ## License

  This project uses the ${data.license} license

  ## Contributing

  Before contributing to the repo, please:
  ${data.contributing}

  ## Tests

  To run tests on this project, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions, please email me at ${data.email}.
  Or you can find my through github: https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
