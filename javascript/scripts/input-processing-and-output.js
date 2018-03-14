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
    var currentCharCount = document.getElementById("characterCount_lbl").innerHTML;
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
function updateCalculations(params) {
    var inputOne = parseInt(document.getElementById("inputOne").value);
    var inputTwo = parseInt(document.getElementById("inputTwo").value);

    document.getElementById("addition_lbl").innerHTML = inputOne + ' + ' + inputTwo + ' = ' + (inputOne + inputTwo);
    document.getElementById("subtraction_lbl").innerHTML = inputOne + ' - ' + inputTwo + ' = ' + (inputOne - inputTwo);
    document.getElementById("times_lbl").innerHTML = inputOne + ' * ' + inputTwo + ' = ' + (inputOne * inputTwo);
    document.getElementById("division_lbl").innerHTML = inputOne + ' / ' + inputTwo + ' = ' + (inputOne / inputTwo);
}