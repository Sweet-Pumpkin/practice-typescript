## Types of TypeScript

### 1. number
```
let num : number = 1;
let numArr : number[] = [1, 2, 3];
```

---

### 2. string
```
let str : string = "hello";
let strArr : string[] = ["hello", "world"];
```

---

### 3. boolean
```
let bool : boolean = true;
let boolArr : boolean[] = [true, false];
```

---

### 4. object
```
const player : {
  name : string,
  age? : number
} = {
  name = "dano"
}
```
#### optional
`age? : number` = `age : number | undefined`

---

### 5-1. alias
```
type Player = {
  name : string,
  age? : number
}

const playerDano : Player = {
  name = "dano"
}

const playerPark : Player = {
  name = "park",
  age = 20
}
```

### 5-2. alias function
```
type Player = {
  name : string,
  age? : number
}

function playerMaker(name : string) : Player {
  return {
    name
  }
}

const play = playerMaker("dano");
play.age = 20;
```

---

### 6. readonly
```
const numbers : readonly number[] = [1, 2, 3, 4, 5];
numbers.push(6) = > error
```

### 7. tuple
```
const player : [string, number, boolean] = ["dano", 100, true];
```

### 8. any
```
let a : any[] = [1, 2, 3];
let b : any[] = true;

a + b => not error?
```

### 9. unknown
```
let a : unknown;

if (typeof a === 'number') {
  let b = a + 1 => not error
}

a.toUpperCase(); => error
```

### 10. void
```
function printHi() : void {
  console.log('hi');
}
```

### 11. never
```
function returnHi(): never {
  return "Hi"; => error
}

function returnError(): never {
  throw new Error("X");  => not error
}

function parameter(name : string | number) {
  if (typeof name === "string") {
    name => (parameter) name : stirng
  } else if (typeof name === "number") {
     name => (parameter) name : number
  } else {
    name => (parameter) name : never
  }
}
```