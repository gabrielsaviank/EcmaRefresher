const person =  {
    name: "Gabriel",
    age: 25, 
    greet (){
        console.log("Hi I am " +this.name)
    }
};

// Object destructuring

const printName = ({name}) => {
    console.log(name);
};


// Destructing Arays? 
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);