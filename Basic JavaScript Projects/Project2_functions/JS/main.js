function My_First_Function()                                         //Defining a function
{
    var str = "The water is Green!"                                  //Defining a variable and giving it a string value
    var result = str.fontcolor("Green");                             //Using fontcolor method
    document.getElementById("Green_Text").innerHTML = result;        //Putting the value of result into HTML element with "Green_Text" id

}

function myFunction()
{
    var sentence = "You will face defeats in life,";                  //Using += to concatenate
    sentence += " but never let yourself be defeated.";
    document.getElementById("Concatenate").innerHTML = sentence;    //Putting the value of result into HTML element with "sentence" id
}