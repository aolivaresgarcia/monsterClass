// Create a class called Monster - yup, we're creating a monster
// This class must have three properties 
// (and three parameters in the constructor)
// typeOfMonster, strength, name

// Create two getters for this class

// Create two functions (the getters don't count):
// One function that changes the monster's name
// Another function that "makes the monster attack"

// NEXT, create a subclass of Monster (see Athlete from tonight's class) 
// called EvolvedMonster
// As you already know, this new class will take on the properties 
// (i.e. this._name) of the Monster class

// Add two new properties to this class: speed and weapon

// Create a function that changes your EvolvedMonster's weapon

// Create two instances of each class, and call at least three functions 
// for each one
// Place this in a new GitHub repository and share the link with me. Deadline: 1pm

class Monster {
    constructor(type, name, strength){
        this._type = type;
        this._name = name;
        this._strength = strength;
    }
    get type(){
        return this._type;
    }
    get strength(){
        return this._strength;
    }
    get name(){
        return this._name;
    }
    // get size(){
    //     return this._size;
    // }

    changeName(){
        this._name += "!"
    }
    // attack is an interaction with two objects. 
    attack(){
        // not only does this add 10 to your strength, you also attack
        this._strength += 10;
        console.log('You attacked')
    }

}

let onionBoy = new Monster("oger", "Shrek", 10)
let oneEyes = new Monster ("Cyclops", "Randy", 30)
// calling functions
onionBoy.attack();
oneEyes.changeName();
console.log(onionBoy, oneEyes);

class evolvedMonster extends Monster{
    constructor(type, name, strength, speed, weapon){
        super(type, name, strength);
        this._speed = speed;
        this._weapon = weapon;
    }
// we write the get functions to be able to manipulate the properties/values
    get speed(){
        return this._speed;
    }
    get weapon(){
        return this._weapon
    }

    set weapon(newWeapon){
        if (typeof newWeapon === "string"){
            this._weapon = newWeapon;
        }
    }
    changeW(){
        this.weapon = "Sword"
    }
}


let eOnionBoy = new evolvedMonster("oger", "Shrek", 20, 30, "daggar");
let eOneEyes = new evolvedMonster("Cyclops", "Randy", 30, 5, "fists");
console.log(eOnionBoy);
console.log(eOneEyes);
eOnionBoy.changeW();
console.log(eOnionBoy);
// console.log(eOneEyes);
