
function generator(){

const prova = document.querySelector(".contenitore");
let colori = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let vuoto = [];
for (let i = Math.floor(Math.random() * 16); vuoto.length < 6; i = Math.floor(Math.random() * 16)) {
    vuoto.push(colori[i]);
}

let b = "#" + vuoto.join("");
prova.style.background = b;
}


function nameGenerator(){

let names = ["Juju Bubble", "Ice-Magalli", "Galeozzi", "Smutandone", "Mogadishu", "Vasco de Gamma"];
const prova = document.querySelector(".nome");
let a = Math.floor(Math.random() * 4);

prova.innerHTML = names[a];
}



function quoteGenerator(){

let people = [
    {"quote": "To be or not to be; that is the question.", "author":"William Shakespeare"},
    {"quote": "There are only two tragedies in life: one is not getting what one wants, and the other is getting it.", "author":"Oscar Wilde"},    
    {"quote":"The first draft of anything is shit.", "author":"Ernest Hemingway"}, 
    {"quote":"If my heart had a lid, I would lift it and show you my joy.", "author": "-From Suq'Ata wedding ceremony"}
];
const prova1 = document.querySelector(".italic1");
let a = Math.floor(Math.random() * 4);
prova1.innerHTML = people[a].quote;
const prova2 = document.querySelector(".italic2");
prova2.innerHTML = people[a].author;
    
}
