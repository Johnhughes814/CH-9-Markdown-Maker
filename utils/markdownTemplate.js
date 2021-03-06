function markdownTemplate (answers, response){
    return `
# ${answers.title} 

![javascript badge mit license](https://img.shields.io/badge/LlCENSE-${answers.license}-blue)

## Description
${answers.description} 

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${answers.installation}

## Usage
You can use this command-line application by cloning or downloading it, then running the commands below:
<code>npm i </code>
<code>node server.js </code>


## License
${answers.license}

## Contributing
Please feel free to contribute to this repository. [GUIDE TO CONSTRIBUTING](https://github.com/freeCodeCamp/how-to-contribute-to-open-source)

## Tests
To run tests, use the command below.
    
## Questions
If you have any further questions please do not hesitate to contact me either using my email or github account provided:

${answers.installation}

[${answers.username}](https://www.github.com/${answers.username})
`;
} 

module.exports = markdownTemplate;




// ## Contributing

// There are many ways in which you can participate in this project, for example:

// * [Submit bugs and feature requests](https://github.com/Johnhughes814/markdown-maker/issues), and help us verify as they are checked in
// * Review [source code changes](https://github.com/Johnhughes814/markdown-maker/pulls)
