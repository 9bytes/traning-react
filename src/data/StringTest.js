const tmpStr = "Mahesh Varma";
console.log(tmpStr.split('').reverse().join('') === tmpStr);

console.log(tmpStr.split(' ').reduce( (acc, word) => { acc += word.charAt(0); return acc;  }, '' ));

const myDate = new Date('2021-05-21');
console.log((myDate - new Date())/1000/60/60/24)


//===============================================================
// class Person {

//     constructor(fName, lName, phone) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.phone = phone;
//     }

//     firstName;
//     lastName;
//     phone;

//     sayName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

function Person(fName, lName, phone) {

    const _address = "Hyderabad"

    this.firstName = fName;
    this.lastName = lName;
    this.phone = phone;

    this.sayName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

const dddd = new Person();

const myPerson = new Person("Mahesh", "Varma", 232322);


console.log(myPerson.sayName());
console.log(typeof myPerson);


const person2 = new Person();
const dateOne = new Date();
const dateTwo = new Date();

const myString = new String('Mahesh');

const myString2 = "Mahesh";
const myArr = new Array();
const total = new Number(10);

const total2 = 10;



const objLiteral = {};

// Extending Types

Array.prototype.size = () => {
    return this.length;
}


class MyArray extends Array {
    constructor(...args) {
        super(...args)
    }

    removeFirst() {
        this.shift()
    }
    removeLast() {
        this.pop();
    }
    removeAt(pos) {
        this.splice(pos, 1);
    }
}


const myArr2 = new MyArray(10, 20, 30);
myArr2.push(20);
myArr2.removeFirst();

