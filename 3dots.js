const ages = [10, 12, 25, 35, 36];
const ages2 = [25, 26, 36, 20];
const ages3 = [22, 34, 24, 22, 56, 23];

// const allAges = ages.concat(ages2). concat([5]).concat(ages3);
const allAges = [...ages, ...ages2, 5, ...ages3];

const takaPoisa = [234, 543, 6543, 564, 93, 9399];

const maximum = Math.max(...takaPoisa);
console.log(maximum);