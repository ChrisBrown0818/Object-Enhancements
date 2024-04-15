
//q1
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName,
    }
};



//q2
let favoriteNumber = 42;

const instructor ={
    firstName: 'colt',
    [favoriteNumber] : 'that is my favorite thing!'
}


//q3
const teacher = {
    firstName: 'colt',
    saysHi(){
        return 'hi'
    },
    saysBye(){
        return this.firstName + " says bye";
    }
}


//q4
function createAnimal(species, verb, noise) {
    return {
    species,
    [verb]() {
        return noise;
    }
}
}