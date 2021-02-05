const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// function to initialize program
function init() {
    console.log('--------------------');
    console.log("Welcome! To get your team profile website generated, you will answer a series of prompts. Let's get started!");    
    console.log('--------------------');
    manager();
}

// function to prompt manager-related details, which enable us to call the Manager constructor 
function manager() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter the manager's name:",
            name: 'name'
        },
        {
            type: 'input',
            message: "Please enter the manager's ID number:",
            name: 'id'   
        },
        {
            type: 'input',
            message: "Please enter the manager's email:",
            name: 'email'   
        },
        {
            type: 'input',
            message: "Please enter the manager's office number:",
            name: 'office'   
        },
    ])
    .then(response => {
        // Create a new manager profile with user's inputs 
        const newManager = new Manager(response.name, response.id, response.email, response.office);
        // Store manager profile details into the team object
        team.push(newManager);
        
        // Call nextStep function
        nextStep();
    });
}

// function to determine whether User wants to continue adding team members or create team website 
function nextStep() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select the next step you would like to take:',
            name: 'nextStep',
            choices: ['Add Team Member', 'Create Team Profile']
        }
    ]).then(response => {
        switch(response.nextStep) {
            case 'Add Team Member':
                employeeType();
                break;
            case 'Create Team Profile':
                generateWebsite();
                break;
        }
    })
}

// function to determine employee type  
function employeeType() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select employee type',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then(response => {
        switch(response.role) {
            case 'Manager':
                manager();
                break;
            case 'Engineer':
                engineer();
                break;
            case 'Intern':
                intern();
                break;
        }
    })
}

// function to prompt engineer-related details, which enable us to call the Engineer constructor 
function engineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter the engineer's name:",
            name: 'name'
        },
        {
            type: 'input',
            message: "Please enter the engineer's ID number:",
            name: 'id'   
        },
        {
            type: 'input',
            message: "Please enter the engineer's email:",
            name: 'email'   
        },
        {
            type: 'input',
            message: "Please enter the engineer's Github username:",
            name: 'github'   
        },
    ])
    .then(response => {
        // Create a new manager profile with user's inputs 
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        // Store manager profile details into the team object
        team.push(newEngineer);
        
        // Call nextStep function
        nextStep();
    });
}

// function to prompt intern-related details, which enable us to call the Intern constructor 
function intern() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter the intern's name:",
            name: 'name'
        },
        {
            type: 'input',
            message: "Please enter the intern's ID number:",
            name: 'id'   
        },
        {
            type: 'input',
            message: "Please enter the intern's email:",
            name: 'email'   
        },
        {
            type: 'input',
            message: "Please enter the intern's school name:",
            name: 'school'   
        },
    ])
    .then(response => {
        // Create a new manager profile with user's inputs 
        const newIntern = new Intern(response.name, response.id, response.email, response.school);
        // Store manager profile details into the team object
        team.push(newIntern);
        
        // Call nextStep function
        nextStep();
    });
}

// function to create Team Profile Website
function generateWebsite() {
    const generateTeam = render(team)

    fs.writeFile(outputPath, generateTeam, (error)=>{
        error ? console.log(error) : 
            console.log('--------------------');
            console.log('Check the output folder!');
            console.log('--------------------');
    })
}

// Call necessary functions
init();