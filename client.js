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
    const firstNameIn = $('#FirstNameInput').val();
    const lastNameIn = $('#LastNameInput').val();
    const employeeIDIn = $('#IDInput').val();
    const titleIn = $('#TitleInput').val();
    const annualSalaryIn = $('#AnnualSalaryInput').val();
    const inputProfile = {
        firstName: firstNameIn,
        lastName: lastNameIn,
        employeeID: employeeIDIn,
        title: titleIn,
        annualSalary: annualSalaryIn
    }
    console.log(`${firstNameIn}, ${lastNameIn}, ${employeeIDIn}, ${titleIn}, ${annualSalaryIn}`);

    employeeProfiles.push(inputProfile);
    
    console.log(employeeProfiles);
    
    $('.inputValues').val('');

    $('tbody').append(`<tr>
    <td>${firstNameIn}</td>
    <td>${lastNameIn}</td>
    <td>${employeeIDIn}</td>
    <td>${titleIn}</td>
    <td>${annualSalaryIn}</td>
    <td>
        <button>Delete</button>
    </td>
</tr>`);
calculateMonthlyCost();
}

function calculateMonthlyCost() {
    console.log();
    
}

// $('#FirstNameInput', '#LastNameInput', '#IDInput', '#TitleInput', '#AnnualSalaryInput' ).text('');
