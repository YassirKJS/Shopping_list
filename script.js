const addButton = document.getElementById("button");
const addInput = document.getElementById("input");
const ul = document.querySelector("ul");

function isNotEmpty(input) {
    if (input.value.length > 0) return true;
}

function addItemToList(input) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
    input.value = "";
}

function addItemOnClick() {
    if (isNotEmpty(addInput)) addItemToList(addInput);
}

function addItemOnKeypress(e) {
    if (isNotEmpty(addInput) && e.keyCode === 13) addItemToList(addInput);
}

addButton.addEventListener("click", addItemOnClick);
addInput.addEventListener("keypress", addItemOnKeypress);

window.addEventListener('load', function() {
    addInput.value = "";
});