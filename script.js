const addButton = document.getElementById("button");
const addInput = document.getElementById("input");
const ul = document.querySelector("ul");
const deleteButtons = document.getElementsByClassName("delete");

function isNotEmpty(input) {
    if (input.value.length > 0) return true;
}

function addItemToList(input) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "delete";
    btn.innerText = "X";
    btn.onclick=removeParent;
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(btn);
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

for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click", removeParent);
}

function removeParent(e){
    e.target.parentElement.remove();
}
