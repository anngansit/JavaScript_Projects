//concat() Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice() Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method
function toUpperCase_Method() {
    let text = document.getElementById("Convert").innerHTML;
    document.getElementById("Convert").innerHTML = text.toUpperCase();
}

//search() Method
function search_Method() {
    let str = "Please locate where 'Please' occurs!";
    document.getElementById("Search").innerHTML = str.search("Please");
}

//Number Methods
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
} 

//toFixed() Method
function fixed_Method() {
    let text = "Good Afternoon!";
    let result = text.fixed();
    document.getElementById("fixed").innerHTML = result;
}

//valueOf() Method
function valueOf_Method() {
    let text = "How are you?"
    let result = text.valueOf()
    document.getElementById("value").innerHTML = result;
}