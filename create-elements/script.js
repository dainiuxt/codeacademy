const newLine = document.createElement("br");

const container = document.createElement("div");
container.classList.add("container");
container.textContent = "Site body created with DOM only";

document.body.appendChild(container);

const buttons = document.createElement("div");
const addButton = document.createElement("button");

addButton.textContent = "Create new input!";

container.appendChild(buttons);

let counter = 0;

const myRange = document.createElement("input");
myRange.setAttribute("type", "range");
myRange.setAttribute("max", 10);
myRange.setAttribute("value", 0);

buttons.appendChild(addButton);
buttons.appendChild(newLine);
buttons.appendChild(myRange);

const results = document.createElement("div");

results.classList.add("results");
results.textContent = "Here will go results:";

container.appendChild(results);

addButton.onclick = function() {
    if (counter < 10) {
        const addInput = document.createElement("input")
        addInput.setAttribute("type", "text")
        addInput.classList.add("inputbox");
        addInput.setAttribute("placeholder", "Start typing...");
        
        const p = document.createElement('p');
        const deleteRecord = document.createElement("button");

        deleteRecord.classList.add("remover");
        deleteRecord.textContent = "Delete this";
        deleteRecord.onclick = function() {
            let selected = deleteRecord.parentElement;
            selected.remove();
        }
        
        p.appendChild(addInput);
        p.appendChild(deleteRecord);
        results.append(p);
        addInput.focus();
        counter++;
        myRange.setAttribute("value", counter);
        console.log(counter);
    } else {alert('That\'s too much!');}
};
