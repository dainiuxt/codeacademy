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

const display = document.createElement("div");

container.appendChild(display);

addButton.onclick = function() {
    if (counter < 10) {
        const addInput = document.createElement("input")
        addInput.setAttribute("type", "text")
        addInput.classList.add("inputbox");
        addInput.setAttribute("value", '');
        addInput.setAttribute("placeholder", "Start typing...");
        
        const entry = document.createElement('p');
        const deleteRecord = document.createElement("button");

        entry.appendChild(addInput);
        entry.appendChild(deleteRecord);
        results.append(entry);
        addInput.focus();
        counter++;
        console.log(counter);

        const record = document.createElement("p");
        record.setAttribute("id", counter + 100);
        record.textContent = counter + 100;
        // display.appendChild(record);

        deleteRecord.classList.add("remover");
        deleteRecord.textContent = "Delete this";
        deleteRecord.onclick = function() {
            let selected = deleteRecord.parentElement;
            selected.remove();
            counter--;
            myRange.setAttribute("value", counter);
        }

        entry.setAttribute("id", counter);
        myRange.setAttribute("value", counter);
    } else {alert('That\'s too much!');}
};

// var onChange = function(e) {
//     console.info(this.value);
//     // or
//     // console.info(e.target.value);
//   };

document.addEventListener('input', function(e) {
    if (e.target.class == "inputbox") {
        let selects = document.querySelectorAll(".inputbox");
        console.log(selects.value);
    }
});


//   var input = document.getElementById('some-id');
//   input.addEventListener('input', onChange, false);

