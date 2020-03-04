// function doubleIt(num){
//     return num *2;
// }

// const doubleIt = function (num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const bishal = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(40);
const result2 = add(20, 30);
const result3 = give5();
const result4 = bishal (25, 20);
console.log(result4);