function Ride_Function() {            //using ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height <52) ? "You are too short":"Your are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

function Vehicle(Make, Model, Year, Color) {      //using New_and_This keyword
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {                    
    document.getElementById("New_and_This").innerHTML = 
    "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Make + 
    " manufactured in " + Erick.Vehicle_Year;
}

function count_Function() {                        //using nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}