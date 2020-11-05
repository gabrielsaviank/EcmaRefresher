//Array 

const stuff = ["Sports", 1, true, {gabriel}];

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
    console.log(hobby);
}

/*Map creates an array that takes a funciton where you define how to edit that array 
or the elements, the funciton will be executed on every element of the array */
console.log(hobbies.map( hobby => {
    return 'Hobby: ' + hobby;
})); 
 
