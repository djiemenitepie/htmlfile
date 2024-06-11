var btn = document.querySelector("button");

btn.addEventListener('click', show);

function show(){
   var name =  prompt("Hello comrad. what's ur name?");
   confirm("Welcome comrad "+name+". Do you want to leave?");
}