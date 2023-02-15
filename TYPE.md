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

### 5-2 alias function
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