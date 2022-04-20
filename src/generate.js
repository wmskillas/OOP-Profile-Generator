const managerHtml = (manager) => {
    return `
    <div class='col-4 my-4'>
        <div class='card'>
            <div class='card-header bg-primary text-center'>
            <h3><strong>Team Manager</strong></h3>
            <h2>${manager.name}</h2>
            </div>
            <div class='card-body bg-light'>
            <p class='id'>ID: ${manager.id}</p>
            <p class='email'>Email: ${manager.email}</p>
            <p class='phoneNumber'>Phone Number: ${manager.phoneNumber}</p>
            </div>
        </div>
    </div>`;
}
const engineerHtml = (engineer) => {
    return `
    <div class='col-4 my-4'>
        <div class='card'>
            <div class='card-header bg-primary text-center'>
            <h3><strong>Engineer</strong></h3>
            <h2>${engineer.name}</h2>
            </div>
            <div class='card-body bg-light'>
            <p class='id'>ID: ${engineer.id}</p>
            <p class='email'>Email: ${engineer.email}</p>
            <p class='phoneNumber'>gitHub: ${engineer.gitHub}</p>
            </div>
        </div>
    </div>`;
}
const internHtml = (intern) => {
    return `
    <div class='col-4 my-4'>
        <div class='card'>
            <div class='card-header bg-primary text-center'>
            <h3><strong>Intern</strong></h3>
            <h2>${intern.name}</h2>
            </div>
            <div class='card-body bg-light'>
            <p class='id'>ID: ${engineer.id}</p>
            <p class='email'>Email: ${intern.email}</p>
            <p class='phoneNumber'>School: ${intern.school}</p>
            </div>
        </div>
    </div>`;
};

generate = (data) => {
    teamData = [];

    for (let i = 0; i < data.length; i++) {

        const employee = data[i];
        const position = employee.getRole();

        if (position === 'Manager') {

            const managerCard = generateManager(employee);
            teamData.push(managerCard);
        }
        else if (position === 'Engineer') {
            
            const engineerCard = generateEngineer(employee);
            teamData.push(engineerCard);
        }
        else if(position === 'Intern') {
            
            const internCard = generateIntern(employee);
            teamData.push(internCard);
        }
        else {
            console.log('There are no team members! How are you going to make that thing you wanted??')
        }
    }

const teamCards = teamData.join('')
const generateTeam = generateTeamHtml(employeeCards)
return generateTeam
console.log(teamCards);

}
const generateTeamHtml = (teamCards) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-primary d-flex justify-content-center fs-1"><i>Team Members</i></header>
    <main>
        <div class="container">
            <div class="row d-flex justify-content-center">
                ${teamCards}
            </div>
        </div>
    </main>
</body>
</html>
    `;
}

module.exports = generate;



