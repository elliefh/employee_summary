# Employee Summary [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Employee Summary ![License: MIT](https://opensource.org/licenses/MIT)](#employee-summary-)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Links](#links)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Resources](#resources)
  - [License](#license)
    - [Hints](#hints)
    - [Roster output](#roster-output)
  - [Bonus](#bonus)

## Description

Employee Summary is a command line application that generates a software engineering team profile. The application will first prompt the User for information about the team manager, then prompt the User for information about the team members. The User can input any number of team members, including engineers and interns. This application includes unit tests to ensure that the code can be reused and iterated for future contributors. When the User has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the User. This application was created with the following User story in mind. 

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```


## Links
- [Repository](https://github.com/elliefh/employee_summary)
  
## Installation
The following command should be run to install necessary dependencies: 
```bash
npm i
```
## Testing
The following command should be run for unit testing: 
```bash
npm test
```

## Resources
- [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/)
- [jest](https://jestjs.io/)

## License
MIT License

Copyright (c) [2021] [Ellie Fu-Hinthorn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- # Unit 10 OOP Homework: Template Engine - Employee Summary

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* Your app will run as a Node CLI to gather information about each employee.

* Below is an example of what your application may look like. Remember, the styling is completely up to you so try to make it unique.

![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

It is recommended that you start with a directory structure that looks like this:

```
lib/           // classes and helper code
output/        // rendered output
app.js         // Runs the application
```

### Hints

* Create multiple HTML templates for each type of user. For example, you could use the following templates:

  * `main.html`

  * `engineer.html`
  
  * `intern.html`
  
  * `manager.html`


* In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Bonus

* Use validation to ensure that the information provided is in the proper expected format.

You are required to submit the following:

* The URL of the GitHub repository

* A video demonstrating the entirety of the app's functionality 

