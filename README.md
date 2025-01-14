# jquery-salary-calculator

## Description

Duration: First Weekend Project

This application is used to take in employee information, display it in a table in the DOM, and calculate total monthly salary that is tracked on DOM from annual income.
The annual salary input must be only numbers, no additional characters such as ($,). Employees added to the table may then be deleted by clicking the delete button for that respective table row. To see the fully functional site, please visit: https://github.com/chrisferber/jquery-salary-calculator. Fork the project to local computer and then give command `open index.html` in terminal.

## Flowcharting
- [X] create index.html, client.js, and style.css files
    - [X] use html boiler plate
    - [X] create title and `h1` element
- [X] copy in jquery.js
    - [X] link in jquery.js, style.css, and client.js files
- [X] use `console.log()` to test jquery.js and client.js sourced correctly
    - [X] change background color to confirm style.css sourced correctly
- [X] create add employee `h3` tag
- [X] create inputs in index.html
    - [X] employee first name
    - [X] employee last name
    - [X] employee ID
    - [X] job title
    - [X] annual salary
- [X] create 'Submit' button after input tags
- [X] create a table in html
- [X] create table headings
    - [X] first name
    - [X] last name
    - [X] employee ID
    - [X] job title
    - [X] annual salary
- [X] hard code a few employee rows
    - [X] add employee input values and delete button
- [X] create empty array for employee information in javascript
- [X] create empty array to hold total salary of all employees
- [X] create `OnReady` function
- [X] add event listener to Submit button
    - [X] console log I have been clicked
    - [X] console log input values
    - [X] create local object to be populated with input values
    - [X] push populated object to empty array
    - [X] empty input fields to placeholders after button click
    - [X] append inputs to DOM
- [X] create function that adds employee salaries to get total monthly costs
    - [X] add up all annual salaries
    - [X] divide by 12 to get monthly salaries
    - [X] append to DOM
- [X] create function that turns background color of monthly costs to red if > $20,000
- [X] create delete button that removes employee from DOM
- [X] in style.css change object orientation to match wireframe
- [X] add input values for several employees and delete several employees to test functionality
- [X] follow instructions to create professional README.md
