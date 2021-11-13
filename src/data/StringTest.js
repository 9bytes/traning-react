const tmpStr = "Mahesh Varma";
console.log(tmpStr.split('').reverse().join('') === tmpStr);

console.log(tmpStr.split(' ').reduce( (acc, word) => { acc += word.charAt(0); return acc;  }, '' ));

const myDate = new Date('2021-05-21');
console.log((myDate - new Date())/1000/60/60/24)