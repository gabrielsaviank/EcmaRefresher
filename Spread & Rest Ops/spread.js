// SPREAD Operator ...
const hobbies = ['Sports', 'Cooking'];

/*I don't want to modify my old array in this case */ 
const copiedArray = [...hobbies]; 


//REST OPERATOR
/*REST operator let you have as many args as you want */
const toArray = (...args) => {
    return args 
};
console.log(toArray(1, 2, 3, 4));