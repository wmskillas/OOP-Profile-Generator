const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generate = require('./src/generate')
const employeeList = [];

//const writeFileAsync = util.promisify(fs.writeFile);

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
])

.then(managerInfo => {
    const {name, id, email, phoneNumber} = managerInfo;
    const manager = new Manager (name, id, email, phoneNumber);

    employeeList.push(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type:'list',
            name:'role',
            message:'What is your role?',
            choices:["Engineer", "Intern"],
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
    ])

    .then(employeeInfo => {
        let {name, id, email, gitHub, school, addMoreEmployees} = employeeInfo;
        let employee;
        console.log(employee);

        if (role === "Engineer"){
            employee = new Engineer (name, id, email, gitHub);
        } 
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        employeeList.push(employee);

        if (addMoreEmployees) {
            return addEmployee(employeeList);
        }
        else { 
            return employeeList;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Team Profile Created!')
        }
    })
};

addManager()
.then (addEmployee)
.then (employeeList => {
    return generate(employeeList);
})
.then (htmlIndex => {
    return writeFile(htmlIndex);
})
.catch(err => {
    console.log(err)
}) 