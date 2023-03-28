let increment = document.getElementById("count-el");


let counter = 0;

function count() {
    counter += 1;
    increment.innerText = counter;
}

let saveEl = document.getElementById("entries");

function save() {
    let newEntry = " " + counter + " - ";
    saveEl.innerText += newEntry;
    increment.innerText = 0;
    counter = 0;
}




