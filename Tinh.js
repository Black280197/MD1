

function Cong() {
    let x = parseInt (document.getElementById("in").value);
    let y = parseInt (document.getElementById("out").value);
    let result;
    result = Number(x) + Number(y);
    document.getElementById("Result").innerHTML = result; console.log(result);
}
function Tru() {
    let x = parseInt (document.getElementById("in").value);
    let y = parseInt (document.getElementById("out").value);
    let result;
    result = Number(x) - Number(y);
    document.getElementById("Result").innerHTML = "Result Subtraction : " + result;
}
function Nhan() {
    let x = parseInt (document.getElementById("in").value);
    let y = parseInt (document.getElementById("out").value);
    let result;
    result = Number(x) * Number(y);
    document.getElementById("Result").innerHTML = "Result Multiplication : " + result;
}
function Chia() {
    let x = parseInt (document.getElementById("in").value);
    let y = parseInt (document.getElementById("out").value);
    let result;
    result = Number(x) / Number(y);
    document.getElementById("Result").innerHTML = "Result Division : " + result;
}
