// Arrow Functions 
const summariseUser = (userName, userAge) => {
    return(
        "Name is " + 
        userName + 
        "age is " +
        userAge
    );
};

// Another Example (Short Way)
const add = (a, b) => a + b;
console.log(add (1, 2));

    //With one arg 
const addONE = a => a + 1; 

    //Without args  
const addRandom = () => 1 + 2; 