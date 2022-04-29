let x: [string, number];

x = ["hello", 39];

// x = [10, "Mark"]; => Error

// x[3] = "world"; => 할당 불가

const person: [string, number] = ["Mark", 39];
const [first, second] = person;