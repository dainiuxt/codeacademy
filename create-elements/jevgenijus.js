const slider = document.getElementById('slider')
const firstname = document.getElementById('name')
const lastname = document.getElementById('lastname')
slider.value = 0;

firstname.addEventListener('change', function(){
    if (firstname.value.length == 0) {        
        slider.value -= 1;
    } else {
        slider.value += 1;
    }
});

lastname.addEventListener('change', function(){
    if (lastname.value.length == 0) {        
        slider.value -= 1;
    } else {
        slider.value += 1;
    }
})

//Nerijus Latakas JS

/*
let name = "BirutÄ—";
let surname = "ZakristijonaitÄ—";
let age = 89;
console.log("Vardas: " + name + " PavardÄ—: " + surname + " AmÅ¾ius: " + age);

main = document.getElementById('main');
main.style.color = "blue";
main.innerHTML = name + " " + surname + " " + age;

justArray = ["Birute", "Baliniauskaite", "128"];
justObject = {
    name : "Birute",
    surname : "Daliniauskaite",
    age : "128",
}
console.log(justArray);
console.log(justObject);
main.innerHTML = "Its jus Array:: " + justArray + " nuu <br>  Its just Object:: " + justObject.name + " " + justObject.surname + " " + justObject.age;

justObject.name = "oplia";
console.log(justObject);*/

/*sestadienis*/

/*let x = -5.2;
let y = 2.5;
let z = x - y;
console.log(z.toFixed(7));*/

/*let answer = confirm("Ar kazkas taip?");
if (answer === true) {
    alert("atsakymas TAIP");
    console.log("Atsakymas TAIP");
}else {
    alert("Atsakymas NE");
    console.log("Atsakymas NE");
    let promptas = prompt("O tai kodel daba?");
    console.log(promptas);
    console.log("Nerpriimame neigiamu atsakymu, todel pakeisime ji i teigiama");
    console.log("Sorry yRA kaip YRA :) ");
    answer = true;
    console.log(answer);
}*/

/*
let who = prompt("iveskite kazka");

if (Number(who)) {
    alert ("tao buvo skai2ius");
}
if (String(who)) {
    alert ("tao buvo stringas");
}

/!*conditional ternary operator*!/
//true ? console.log("true") : console.log("false");


let answer =prompt('skaicius');
let galune = answer > 1 ? 'skaiciai' : 'skaicius';
console.log(galune);*/

/*
let list = ["viens", "du", "trys"];
let w = prompt("kuris eleemntas?");
if ((w >= 0 && w < list.length) || w === "viens" || w === "du" || w === "trys"){
    switch (true) {
        case w === "viens":
            w = 0;
            break;
        case w === "du":
            w = 1;
            break;
        case w === "trys":
            w = 2;
            break;
    }
    alert(list[w]);
}else{
    alert("neteisinka ivesta reksme");
}
*/

/*
let list = [
    "duomenys1",
    "duomenys2",
    "duomenys3",
    "duomenys4",
    "duomenys5",
    "duomenys6",
    "duomenys7",
    "duomenys8",
    "duomenys9",
    "duomenys10",
];

let list2 = [
    "duomenys1",
    "duomenys2",
    "duomenys3",
    "duomenys4",
    "duomenys5",
    "duomenys6",
    "duomenys7",
    "duomenys8",
    "duomenys9",
    "duomenys10",
];

let text="";

for (let i=0; i<list.length; i++) {
    text+= list[i] +"<br>";
    console.log(text);
}*/
/*

let persons = [
    {
        'name' : prompt('vardas?'),
        'age' : prompt('amzius?')
    },
    {
        'name' : prompt('vardas?'),
        'age' : prompt('amzius?')
    },
    {
        'name' : prompt('vardas?'),
        'age' : prompt('amzius?')
    },
    {
        'name' : prompt('vardas?'),
        'age' : prompt('amzius?')
    },
];

let answer = [];

for (let i=0; i<persons.length; i++) {
    if (persons.age[i] > 18 && persons.age[i] === Number) {
        console.log(`${persons.name[i]} yra pilnametis`);
        answer.push(persons.name[i]);
    } else {
        persons.age[i] = prompt('patikslinkite amziu');
        i = i - 1;
    }
}

answer.forEach(function () {
     console.log("pilanmeciai:" + this);
 });*/

/*
let persons = [
    {
        name: 'Person1',
        lastname: 'Lastname1',
        carModel: 'Lexus',
        kidsCount: '5',
        houses: [
            {
                name:'House1'
            }
        ]
    },
    {
        name: 'Person2',
        lastname: 'Lastname2',
        pcModel: 'Lenovo',
        houses: [
            {
                name:'House2'
            }
        ]
    },
    {
        name: 'Person3',
        lastname: 'Lastname3',
        bicyleModel: 'Super awesome durable MTB',
        houses: [
            {
                name:'House3'
            }
        ]
    }
]
for (let person of persons) {
    console.log('-----')
    for (let key in person) {
        if (key === 'houses') {
            console.log('Houses:')
            for (let house of person[key]) {
                console.log('   ' + house.name)
            }
        } else {
            console.log(key + ': ' + person[key])
        }
    }
}*/
/*AUTOMOTO MÄ–GÄ–JÅ² BURELIS*/

/* FUNKCIJOS */
//neanoimines
let inputContainer = document.getElementById("input-box");
let uInputs = document.getElementsByClassName("form-input");
let uRange = document.getElementById("uRange");
uRange.max = uInputs.length;

function addInput ()
{
    let newP = document.createElement("p");
    newP.classList.add("text-left");

    let newInput = document.createElement("input");
    newInput.type = 'text';
    newInput.placeholder = 'Ä®raÅ¡ykite maÅ¡ina ar vardÄ…';
    newInput.required = true;
    newInput.classList.add("form-input");

    let delButton = document.createElement("button");
    delButton.classList.add('btn', 'btn-danger', "ml-2");
    delButton.innerText = "DEL";

    inputContainer.appendChild(newP);
    newP.appendChild(newInput);
    newP.appendChild(delButton);
    delButton.onclick = () => removeThis(newP, delButton);

    calculateMax();
}

function checkResult()
{
    if (document.getElementById('answer-box').hasChildNodes() === true){
        document.getElementById('answer-box').innerHTML = '';
    }
    let result_el = document.getElementsByClassName("form-input");
    let answers = '';

    for (let i = 0; i < result_el.length; i++){
        answers += result_el[i].value + " \n ";
        //console.log(result_el[i].value);
    }

    let newP = document.createElement("p");
    let answerBoc = document.getElementById("answer-box");
    newP.innerText = answers;
    answerBoc.appendChild(newP);

    calculateMax();
}

function clearValues()
{
    location.reload();
}

function removeThis(parentEl, thisEl)
{
    if (confirm("ar tikrai?")) {
        parentEl.remove(thisEl);
        checkResult();
        calculateMax();
    }
}

//po pridejimo ir po delete prasukam
function calculateMax ()
{
    let uInputs = document.getElementsByClassName("form-input");
    uRange.max = uInputs.length;

    for (let i = 0; i < uInputs.length; i++) {
        uInputs[i].addEventListener("change", (event) => {
            calculateValue(uInputs);
            checkResult();
        });
    }
}

//po info ivedimo prasukam
function calculateValue (inputs)
{
    let uRangeValue = 0;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length > 0 ) {
            uRangeValue += 1;
        }
    }

    uRange.value = uRangeValue;
}