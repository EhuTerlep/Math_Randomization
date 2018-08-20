var adj = ["smart" , "cool" , "beatiful" , "annoying"];
var name = prompt("What is your name?");
var description = (Math.floor(Math.random() * adj.length));
window.alert(name + " " + "is"+ " "+adj[description]);
