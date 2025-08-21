// This script defines a person object with various properties and a method.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30, hobbies: ["reading", "gaming", "hiking"],
    address: {street: "123 Main St"},
    greet: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};
console.log(person)


const timeWatch = {
    owner : "Manezha",
    batterylevel: 100,
    eras : [
        {name: "Ancient Egypt", year: -2500},
        {name: "Renaissance", year: 1500},
        {name: "Cyber future", year: 3021},
    ],
    currentYear: 2025,
    travel(year) {
        if(this.batterylevel <= 20) {
            console.log("Battery is dead. Please recharge.");
            return;
        }
        const ears = this.eras.find(e => e.year === year);
        if (ears) {
            console.log(`Traveling to ${ears.name} (${ears.year})Ad...`);
        } 
        else {
            console.log(`Warping to year ${year}...`);
        }
        this.currentYear = year;
        this.batterylevel -= 20;
    },
    recharge () {
        console.log("Recharging battery...");
        this.batterylevel = 100;
    },
    status() {
        console.log(`Current year: ${this.currentYear}`);
        console.log(`Battery level: ${this.batterylevel}%`);
    }
}

timeWatch.status();
timeWatch.travel(-2500);
timeWatch.travel(3021);
timeWatch.status();
timeWatch.recharge();
timeWatch.status();

console.log(timeWatch["owner"]);

console.log(person.firstName);
person.greet();

// Accessing properties with spaces in their names
const car = {
    "model name": "Tesla Model S",
};
console.log(car["model name"]);
let propName = "lastName";
console.log(person[propName]);

timeWatch.owner = "Maryam";
console.log(timeWatch.owner);
timeWatch.price = 1000 + "$";
console.log(timeWatch.price);

delete timeWatch.price;
console.log(timeWatch.price); // Should be undefined after deletion
// console.log(timeWatch);

console.log(timeWatch.eras[0].name); // Accessing the name of the first era

const userProfile = {
    id: 101,
    username: "coder_girl",
    contact: {// Nested object
        email: "manizhaebrahimi8@gmail.com",
        phone: "123-456-7890"
    },
    address: { // Another nested object
        street: "456 Elm St",
        city: "Tech City",
        zipCode: "12345"
    },
    preferences: { newsletter: true, darkMode: true },
};
console.log(userProfile); // Accessing the entire userProfile object

const user = {name: "Manezha", age: "17", address: {country: "Afghanistan", city: "Kabul"}};
// const name = user.name
// const age = user.age
// const country = user.country

// const {name, age, country} = user
// const {name:fullname, age:yearsOld} = user

// const {name, city = "Kabul"} = 

const {address:{country, city}} = user

console.log(user)
console.log(country);

