//Example of a global variable
var X = 15;             
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Example of local variable
function Add_numbers_1() {
    var X = 15;
    document.write(20 + X + "<br>")
}
function Add_numbers_2() {
    document.write(X + 100);
    }
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var X=15
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//get date function
function get_Date() {
    if (new Date().getHours() <23) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//if statement
if (10>5) {
    document.write("10 is greater than 5");
}

//else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >=19) {
        Club = "You are old enough to go clubbing!"
    }
    else {
        Club = "You are not old enough to go clubbing!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Club;
    }

    //else if statement
    function Time_function() {
        var Time = new Date().getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is morning time!.";
        }
        else if (Time > 12 == Time < 18) {
            Reply = "It is the afternoon.";
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }