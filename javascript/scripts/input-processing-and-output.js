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
        alert('You have to enter a text')
    }
    else {
        alert('The length of "' + text + '" is: ' + text.length);
    }
}

function updateCharacterCount() {
    var currentCharCount = document.getElementById("lbl_characterCount").innerHTML;
    document.getElementById("lbl_characterCount").innerHTML = 'Text length: ' + document.getElementById("characterCount").value.length;
}

// 3. Printing Quotes
function promptQuote() {
    var quote = prompt('What is the quote?');
    var author = prompt('Who said it?');
    alert(author + ' says ' + '\"' + quote + '\"');
}