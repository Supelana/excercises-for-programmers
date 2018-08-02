function toggleShowElement(show, elementId) {
    let element = document.getElementById(elementId);
    if (show) {
        element.style.display = "block";
        return true;
    }
    element.style.display = "none";
}

function resetElementValue(reset, elementId) {
    if (reset) {
        document.getElementById(elementId).value = '';
    }
}