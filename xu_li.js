let view = document.getElementById("view");
let kt = 0 ;

function hien(value) {
    if (kt == 1) {
        xoa();
        kt = 0;
    }
        view.value += value;
}

function xoa() {
    view.value = "";
}

function kq() {
    let s = view.value;
    while (s.indexOf("x") != -1) {
        s = s.replace("x","*");
    }
    view.value = eval(s); kt = 1;
}