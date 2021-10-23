// create <div class="container"> and add it to <body>
const container = document.createElement("div");

container.classList.add("container");
container.textContent = "Site body created with DOM only";
document.body.appendChild(container);

// create <div class="buttons"> add it to .container
const buttons = document.createElement("div");

container.appendChild(buttons);

// create <div class="results" and add it to .container
const results = document.createElement("div");

results.classList.add("results");
results.textContent = "Here will go results:";
container.appendChild(results);

// create button and text input, add them to .buttons
const addInput = document.createElement("input")

addInput.setAttribute("type", "text")
addInput.classList.add("inputbox");

const addButton = document.createElement("button");

addButton.classList.add("left");
addButton.textContent = "Press me!";

addButton.onclick = function() {
    let entry = document.querySelector(".inputbox").value;
    let p = document.createElement('p');
    let deleteRecord = document.createElement("button");

    deleteRecord.classList.add("remover");
    deleteRecord.textContent = "Delete this";
    deleteRecord.onclick = function() {
        let selected = deleteRecord.parentElement;
        selected.remove();
    }
    p.textContent = entry;
    p.appendChild(deleteRecord);
    console.log()
    results.appendChild(p);
    document.querySelector(".inputbox").value = "";
};

buttons.appendChild(addInput);
buttons.appendChild(addButton);