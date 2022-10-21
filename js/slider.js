var num = 1;
var num1 = 1;
var num2 = 1;

function adelante(){
    num++;
    if (num > 3)
    num = 1;
    var foto = document.getElementById("foto");
    foto.src = "img/slider/vader" + num +".jpg";
}

function atras(){
    num--;
    if (num < 1)
    num = 3;
    var foto = document.getElementById("foto");
    foto.src = "img/slider/vader" + num +".jpg";
}

function adelante1(){
    num1++;
    if (num1 > 3)
    num1 = 1;
    var foto1 = document.getElementById("foto1");
    foto1.src = "img/slider/grievous" + num1 +".jpg";
}

function atras1(){
    num1--;
    if (num1 < 1)
    num1 = 3;
    var foto1 = document.getElementById("foto1");
    foto1.src = "img/slider/grievous" + num1 +".jpg";
}

function adelante2(){
    num2++;
    if (num2 > 3)
    num2 = 1;
    var foto2 = document.getElementById("foto2");
    foto2.src = "img/slider/maul" + num2 +".jpg";
}

function atras2(){
    num2--;
    if (num2 < 1)
    num2 = 3;
    var foto2 = document.getElementById("foto2");
    foto2.src = "img/slider/maul" + num2 +".jpg";
}