function my_Dictionary(){                                       //using key value pair function
    var Animal = {
        Species:"Bird",
        Color:"Brown",
        Breed:"Dove",
        Age:1,
        Sound:"Tweet",
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

