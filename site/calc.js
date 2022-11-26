function add(){
    var a = document.getElementById("x").value;
    var b = document.getElementById("y").value;
    const c = parseInt(a) + parseInt(b);
    alert(`The addition of ${a} and ${b} is ${c}`)
}
function sub(){
    var a = document.getElementById("x").value;
    var b = document.getElementById("y").value;
    alert(`The subtraction of ${a} and ${b} is ${a-b}`)
}
function mult(){
    var a = document.getElementById("x").value;
    var b = document.getElementById("y").value;
    alert(`The multiplication of ${a} and ${b} is ${a*b}`)
}
function divi(){
    var a = document.getElementById("x").value;
    var b = document.getElementById("y").value;
    alert(`The division of ${a} and ${b} is ${a/b}`)
}
