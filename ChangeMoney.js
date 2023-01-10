function ChangeMoney() {
let m = document.getElementById("Amount").value ;
let FromC = document.getElementById("From").value ;
let To = document.getElementById("To").value ;
let s;
    if (FromC == "VND" && To == "USD") {
         s = m / 23000 + "$";
    } else if (FromC == "USD" && To == "VND") {
         s = m * 23000 + "Đồng";
    } else if (FromC == "VND")  s = m + "Đồng";
    else  s = m + "$";

    document.getElementById("Result").innerHTML = "Kết quả là: " + s
}