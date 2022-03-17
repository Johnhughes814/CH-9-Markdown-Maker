const api = require('./utils/api');
const markdownTemplate = require('./utils/markdownTemplate');
const util = require('util')
const fs = require('fs')
const inquirer = require('inquirer')

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type:'input',
        name:'username',
        message: "Enter your github username: "
    },
    {
        type:'input',
        name:'title',
        message: "What is the title of your project: "
    },
    {
        type:'input',
        name:'description',
        message: "Include a description of your project: "
    },
    {
        type:'input',
        name:'installation',
        message: "Specify the commands to install and run the project: "
    },
    {
        type:'input',
        name:'usage',
        message: "Include anything else the user should know to run the project."
    },
    {
        type:'input',
        name:'fullName',
        message: "Enter your first and last name: "
    },
    {
        type:'input',
        name:'fullName',
        message: "Enter your first and last name: "
    },
    {
        type:'input',
        name:'fullName',
        message: "Enter your first and last name: "
    },
    {
        type:'list',
        name:'license',
        message: "Choose the most suitabel license for this project: ",
        choices: [
            "MIT",
            "GPL_3.0",
            "Apache_2.0",
            "Other",
            "None"
        ]
    },
    {
        type:"input",
        name: "tests",
        message: "What is the command to run tests on this application?",
        default: 'npm run test'
    },
];

function promptUser() {
    return inquirer.prompt(questions)
}

promptUser()
    .then(function(answers) {
        return api.getUser(answers.username)
            .then(function(githubData) {
                const md = markdownTemplate(answers, githubData);
                return writeFileAsync('output/README.md', md)
                    .then(function() {
                        console.log("New Markdown file named README.md has been generated");
                    });
            }).catch(function(err) {
                console.log(err);
            });
    });