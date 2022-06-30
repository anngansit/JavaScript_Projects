function addition_Function(){                                                //using addition function
    var Addition = 2 + 2;
    document.getElementById("Math").innerHTML = " 2 + 2 = " + Addition;
}



function subtraction_Function(){                                              //using subtraction function
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = " 5 - 2 = " + Subtraction;
}

function multiplication(){                                                    //using multiplicaiton function
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = " 6 * 8 = " + simple_Math;
}

function division(){                                                           //using division function
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = " 48 / 6 = " + simple_Math;
}

function more_Math(){                                                          //using more than one operation
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator(){                                                    //getting the remainder
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator(){                                                   //displaying the negative value
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var x = 5;                                                                      //increment
x++;
document.write(x); 



var x = 11;                                                                     //decrement
x--;
document.write(x);


window.alert(Math.random() * 50);                                               //displaying random numbers using alert function