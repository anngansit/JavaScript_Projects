//While loops function
function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;  
}

//For Loop function
function Call_Loop() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        text += "Line number " + i + "<br>";
    }
    document.getElementById("loop").innerHTML = text;
}

//String Length
function string_length() {
    let text = "How are you?";
    let length = text.length;

    document.getElementById("stringlength").innerHTML = length;
}

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and Objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing"; 
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//Const Keyword
function constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +  Musical_Instrument.brand + " " + Musical_Instrument.type + 
    " was " + Musical_Instrument.price + "."; 
}


//let Keyword  - constant_function
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);


//Return Statement
function return_function(name) {
    return "Good morning" + name;
}
document.getElementById("return_sample").innerHTML = return_function("Ann");


//Creating Objects with Properties - let function
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//break statement
function break_loop() {
    let text = "";
    for (let i = 0; i<10; i++) {
        if (i === 5) {break; }
        text += "The number is " + i + "<br>"
    }
    document.getElementById("break_sample").innerHTML = text;
}

//continue statement
function continue_loop() {
let text = "";
for (let i = 0; i<10; i++) {
  if (i === 4) { continue; }
  text += "The number is " + i + "<br>";
    }
    document.getElementById("continue_sample").innerHTML = text;
}

