const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeFileAsync = util.promisify(fs.writeFile);

const addManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the managers name of this team?',
        },
        {
            type:'input',
            name:'id',
            message:'What is the managers ID?',
        },
        {
            type:'input',
            name:'email',
            message:'What is the managers email?',
        },
        {
            type:'input',
            name:'phoneNumber',
            message:'What is the managers office number?',
        },
    ]);
};
const addWorker = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'What is your role?',
            choices:['Engineer', 'Intern'],
        },
        {
            type:'input',
            name:'name',
            message:'What is your name?',
        },
        {
            type:'input',
            name:'id',
            message:'What is your id number?',
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?',
        },
        {
            type:'input',
            name:'gitHub',
            message:'What is your gitHub name?',
        },
        {
            type:'input',
            name:'school',
            message:'What school do you go to?',
        },
        {
            type:'confirm',
            name:'addMoreEmployees',
            message:'Would you like to add more team members?',
            default: true,
        },
    ]);
};