window.onload = function () {
    toggleShowElement(false, "calculations"); // 5. Simple Math
    determineWhichElementToShow();            // 6. Retirement Calculator   
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
    var element = document.getElementById(elementId);
    if (show) {
        element.style.display = "block";
        return;
    }
    element.style.display = "none";
}

// 6. Retirement Calculator
function determineWhichElementToShow() {
    var age = document.getElementById("age_input").value;
    toggleShowElement(age, "retirementAge");

    var retirementAge = document.getElementById("retirementAge_input").value;
    toggleShowElement(retirementAge, "retirementAge_lbl")

    document.getElementById("retirementAge_lbl").innerHTML = getRetirementInfo(retirementAge);
}

function getRetirementInfo(retirementAge) {
    if (!retirementAge) {
        return;
    }

    return ('You have ' + getYearsToRetirement(retirementAge) + ' years left until you can retire.\n' +
            'Its YEAR, so you can retire in ' + getRetirementYear(retirementAge));
}

function getYearsToRetirement(retirementAge) {

}

function getRetirementYear(retirementAge) {

}