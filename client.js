console.log('JS');
console.log('this is our document: ', $(document));

let employeeProfiles = [];
let employeeAnnualSalaries = [];

$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $('#SubmitButton').on('click', handleAddEmployeeClick);
}

function handleAddEmployeeClick() {
    
    
}