console.log(hello);
var hello = 'world';

//var hello;
//console.log(hello); //logs undefined
//hello="world";

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle='haystack';
//test();
//function test(){
    //var needle='magnet'
    //console.log(needle); //logs magnet
//}

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//logs super cool (print is never called)

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//logs chicken
//logs half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//mean is not a function, so nothing runs

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//console.log(genre) //undefined
//functionrewind(){
    //console.log(genre) //prints rock
    //console.log(genre) //prints r&b
//}
//console.log(genre) //prints disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//prints san jose
//print seattle
//prints burbank
//prints san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//error because cannot change a const
