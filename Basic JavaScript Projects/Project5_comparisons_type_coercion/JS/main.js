document.write(typeof "Word");
document.write(typeof 3);
document.write(10>2);              //true statement
document.write(10<2);             //false statement
console.log (2 + 2);              //console log
document.write("10" + 5);        //coercion
document.write(10==10);          //true output
document.write(11==2);          //false output

x=10;
y=10;
document.write(x === y); //This returns true

x=5;
y="5";
document.write(x === y); //This returns false - number and string respectively

A="Jerick";
B="Jerick";
document.write(A === B);

document.write(10>5 && 4>2);  //AND Boolean Operator

document.write(5>10 && 2>4);

document.write(2>5 || 10>4);  //OR Boolean Operator

document.write(5>10 || 10>20);


function my_1stFunction() {        
    document.getElementById("Test").innerHTML = 0/0;
}

function my_2ndFunction() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

function my_3rdFunction() {
    document.getElementById("Test").innerHTML = isNaN('007');
}

function my_4thFunction() {
    document.getElementById("Test").innerHTML=(3.16E10); //positive infinity function
}

function my_5thFunction() {
    document.getElementById("Test").innerHTML=(-3.16E10); //negative infinity function
}

function not_1stFunction() {
    document.getElementById("Not").innerHTML = !(30>10); //The !(not) Operator
}

function not_2ndFunction() {
    document.getElementById("Not").innerHTML = !(5>20);
}