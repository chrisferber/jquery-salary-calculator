console.log('JS');
console.log('this is our document: ', $(document));

const employeeProfiles = [];
const employeeAnnualSalaries = [];
let monthlyCost = 0;

$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $('#SubmitButton').on('click', handleAddEmployeeClick);
    $('tbody').on('click', '.deleteButton', handleDeleteClick);
}

function handleAddEmployeeClick() {
    console.log('Submit button has been clicked');
    const firstNameIn = $('#FirstNameInput').val();
    const lastNameIn = $('#LastNameInput').val();
    const employeeIDIn = $('#IDInput').val();
    const titleIn = $('#TitleInput').val();
    const annualSalaryIn = Number($('#AnnualSalaryInput').val());
    const inputProfile = {
        firstName: firstNameIn,
        lastName: lastNameIn,
        employeeID: employeeIDIn,
        title: titleIn,
        annualSalary: annualSalaryIn
    }
    console.log(`${firstNameIn}, ${lastNameIn}, ${employeeIDIn}, ${titleIn}, ${annualSalaryIn}`);

    employeeProfiles.push(inputProfile);

    employeeAnnualSalaries.push(Number(annualSalaryIn));

    console.log(employeeProfiles);
    console.log(employeeAnnualSalaries);


    $('.inputValues').val('');

    $('tbody').append(`<tr>
    <td>${firstNameIn}</td>
    <td>${lastNameIn}</td>
    <td>${employeeIDIn}</td>
    <td>${titleIn}</td>
    <td>${annualSalaryIn}</td>
    <td>
        <button class="deleteButton">Delete</button>
    </td>
</tr>`);
    calculateMonthlyCost(annualSalaryIn);
}

function calculateMonthlyCost(annualSalaryIn) {
    console.log('in calculateMonthlyCost');
    /*let totalCost = (Number(monthlyCost) + employeeAnnualSalaries[employeeAnnualSalaries.length - 1]);
    let totalMonthlyCost = totalCost / 12;
    monthlyCost = totalMonthlyCost;
    console.log(monthlyCost);
    console.log(totalMonthlyCost); 
    for (let i = 0; i < employeeAnnualSalaries.length; i++) {
        monthlyCost += employeeAnnualSalaries[i];
        console.log(monthlyCost);
        
        
    }*/
    monthlyCost += annualSalaryIn / 12;
    console.log(monthlyCost);


    $('#costDisplayContainer').empty('');
    $('#costDisplayContainer').append(`<h3>Total Monthly: $${Math.floor(monthlyCost)}</h3>`);


    budgetDisplayBackgroundColor();
    // $('#MonthlyCostDisplay').text(totalCost);
}

function budgetDisplayBackgroundColor() {
    if (monthlyCost > 20000) {
        $('#costDisplayContainer').css('background-color', 'red');
        $('#costDisplayContainer').css('color', 'white');
    } else {
        return 'Within budget';
    }
}

function handleDeleteClick() {
    console.log('Delete button has been clicked');
    $(this).parent().parent().remove();
}

// $('#FirstNameInput', '#LastNameInput', '#IDInput', '#TitleInput', '#AnnualSalaryInput' ).text('');
