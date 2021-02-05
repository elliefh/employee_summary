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