/*uncomment the part you need*/



/*__________1__________*/
const person1 = { name: "Adam", age: 25, gender: "male" };
console.log(person1.name, person1.age, person1.gender);



/*__________2__________*/
const person2 = { name: "Adam", age: 25 };
person2.gender = "male";
console.log(person2);


/*__________3__________*/
const person3 = { name: "Adam", age: 25 };
person3["gender"] = "male";
console.log(person3);


/*__________4__________*/
const person4 = { name: "Adam", age: 25 };
console.log(person4.name);


/*__________5__________*/
const person5 = { name: "Adam", age: 25 };
console.log(person5["name"]);

/*__________6__________*/
const person6 = { name: "Adam", age: 25, gender: "male" };
for (let key in person6) {
  console.log(`${key}: ${person6[key]}`);1
}

/*__________7__________*/
const person7 = {name: "adam", age:25, gender:"male"};
console.log(Object.keys(person7));


/*__________8__________*/
const person8 = {name: "adam", age:25, gender:"male"};
console.log(Object.values(person8));

/*__________9__________*/
const person9 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.entries(person9));


/*__________10__________*/
const person10 = { name: "Adam", age: 25 };
Object.assign(person10);
person10.age = 30;
console.log(person10);



/*__________11__________*/
const person11 = { name: "Adam", age: 25 };
Object.freeze(person11);
person11.age = 30;
console.log(person11);


/*__________12__________*/
const person12 = { name: "Adam", age: 25 };
Object.seal(person12);
person12.age = 30;
person12.gender = "male";
console.log(person12);



