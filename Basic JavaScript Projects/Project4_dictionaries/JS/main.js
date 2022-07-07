function my_Dictionary(){                                       //using key value pair function
    var Animal = {
        Species:"Bird",
        Color:"Brown",
        Breed:"Dove",
        Age:1,
        Sound:"Tweet",
    };
    delete Animal.Breed;                                        //delete statement that removes the key before its valued is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

