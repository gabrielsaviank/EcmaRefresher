//Objects
    // We can have function inside objects
    /* THIS refers to the surrounding object*/
    /*Reminder that arrow functions are global, if you want to use scoped 
    version you must declare a function
    */
const person = {
    name: "Gabriel",
    age: 25,
    greet () {
        console.log("Hi, I am " + this.name);
    }
};
person.greet();