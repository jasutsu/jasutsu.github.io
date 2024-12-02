let obj = {
    'age': 26,
    'occupation': 'developer',
    'address': {
        'city': 'Bhopal',
        'state': 'Madhya Parshesh'
    }
};

const { occupation, age: years, gender = 'default value' } = obj;
const { address: { city, state} } = obj;

console.log(occupation, years, gender);
// console.log(age);  // age is not defined as it was renamed to years
console.log(city, state);




let arr = [10, 20, 30];
const [first, second] = arr;

console.log(first, second);