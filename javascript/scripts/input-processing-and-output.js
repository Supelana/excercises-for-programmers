window.onload = function () {
    toggleShowElement(false, "calculations"); // 5. Simple Math
    handleRetirementElements(); // 6. Retirement Calculator   
}

// 1. Saying Hello
function promptName() {
    var name = prompt('What is your name?');
    switch (name) {
        case 'Allan':
        case 'Brian':
            alert('Bad Luck ' + name);
            break;
        default:
            alert('Hello ' + name);
            break;
    }
}

// 2. Counting the Number of Characters
function getNumberOfCharacters() {
    var text = prompt('What is the input string?');

    if (text === '') {
        alert('You have to enter a text');
    }
    else {
        alert('The length of "' + text + '" is: ' + text.length);
    }
}

function updateCharacterCount() {
    document.getElementById("characterCount_lbl").innerHTML = 'Text length: ' + document.getElementById("characterCount").value.length;
}

// 3. Printing Quotes
function promptQuote() {
    quotes = {
        'Obi-Wan Kenobi': 'The Force will be with you. Always',
        'Albert Einstein': 'Strive not to be a success, but rather to be of value.'
    };

    var author = prompt('Who said it?');

    if (author in quotes) {
        alert(author + ' said ' + '\"' + quotes[author] + '\"');
    }
    else {
        var quote = prompt('What is the quote?');
        alert(author + ' said ' + '\"' + quote + '\"');
        quotes[author] = quote;
    }
}

// 4. Mad Lib
function playMadLib() {
    var noun = prompt('Enter a noun');
    var verb = prompt('Enter a verb');
    var adjective = prompt('Enter an adjective');
    var adverb = prompt('Enter an adverb');
    alert(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious`);
}

// 5. Simple Math
function updateCalculations() {
    let inputOne = parseInt(document.getElementById("inputOne").value);
    let inputTwo = parseInt(document.getElementById("inputTwo").value);
    if (!inputOne || !inputTwo) {
        clearCalculations();
        toggleShowElement(false, "calculations");
        return;
    }

    document.getElementById("addition_lbl").innerHTML = inputOne + ' + ' + inputTwo + ' = ' + (inputOne + inputTwo);
    document.getElementById("subtraction_lbl").innerHTML = inputOne + ' - ' + inputTwo + ' = ' + (inputOne - inputTwo);
    document.getElementById("times_lbl").innerHTML = inputOne + ' * ' + inputTwo + ' = ' + (inputOne * inputTwo);
    document.getElementById("division_lbl").innerHTML = inputOne + ' / ' + inputTwo + ' = ' + (inputOne / inputTwo);

    toggleShowElement(true, "calculations");
}

function clearCalculations() {
    document.getElementById("addition_lbl").innerHTML = '';
    document.getElementById("subtraction_lbl").innerHTML = ''
    document.getElementById("times_lbl").innerHTML = '';
    document.getElementById("division_lbl").innerHTML = '';
}

function toggleShowElement(show, elementId) {
    let element = document.getElementById(elementId);
    if (show) {
        element.style.display = "block";
        return true;
    }
    element.style.display = "none";
}

// 6. Retirement Calculator
function handleRetirementElements() {
    let age = document.getElementById("age_input").value;
    toggleShowElement(age, "retirementAge");
    resetElementValue(!age, "retirementAge_input");

    let retirementAge = document.getElementById("retirementAge_input").value;
    toggleShowElement(retirementAge, "retirementAge_lbl");

    document.getElementById("retirementAge_lbl").innerHTML = getRetirementInfo(age, retirementAge);
}

function resetElementValue(reset, elementId) {
    if (reset) {
        document.getElementById(elementId).value = '';
    }
}

function getRetirementInfo(age, retirementAge) {
    if (!age || !retirementAge) {
        return '';
    }

    let currentYear = new Date().getFullYear();
    let retirementYear = getRetirementYear(age, retirementAge, currentYear);

    if (age > retirementAge) {
        return `Its ${currentYear}, you could have retired in ${retirementYear}...`;
    }

    let yearsToRetirement = getYearsToRetirement(age, retirementAge, currentYear);
    return `You have ${yearsToRetirement} years left until you can retire.\n 
            Its ${currentYear}, so you can retire in ${retirementYear}`;
}

function getYearsToRetirement(age, retirementAge, currentYear) {
    return getRetirementYear(age, retirementAge, currentYear) - currentYear;
}

function getRetirementYear(age, retirementAge, currentYear) {
    return currentYear + (retirementAge - age);
}
