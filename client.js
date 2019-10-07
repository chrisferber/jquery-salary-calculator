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
    console.log('Submit button has been clicked');
    const firstName = $('#FirstNameInput').val();
    const lastName = $('#LastNameInput').val();
    const employeeID = $('#IDInput').val();
    const title = $('#TitleInput').val();
    const annualSalary = $('#AnnualSalaryInput').val();

    console.log(`${firstName}, ${lastName}, ${employeeID}, ${title}, ${annualSalary}`);
    
}