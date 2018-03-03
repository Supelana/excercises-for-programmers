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

function printMadLib() {
    var noun = document.getElementById("noun_input").value;
    var verb = document.getElementById("verb_input").value;
    var adjective = document.getElementById("adjective_input").value;
    var adverb = document.getElementById("adverb_input").value;
    
    if (noun !== '' && verb !== '' && adjective !== '' && adverb !== '') {
        alert(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious`);
    }
}