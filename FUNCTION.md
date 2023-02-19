## Functions of TypeScript

### 1. call signatures
```
type Add = (a : number, b : number) => number;

const add : Add = (a, b) => a + b;
```

---

### 2-1. overloading
```
type Config = {
    path: string,
    state: object
}

type Push = {
    (path : string) : void
    (config : Config) : void
}

const push : Push = (config) => {
    if(typeof config === "string) {
        console.log(config);
    } else {
        console.log(config.path);
    }
}
```

---

### 2-2. overloading
```
type Add = {
    (a : number, b : number) : number
    (a : number, b : number, c : number) : number
}

const add : Add (a, b, c? : number) {
    return a + b;
}
```

---

### 3-1. polymorphism(generics)
```
type SuperPrint = <T>(arr : T[]) => T

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]); => number type
superPrint([true, false, true]); => boolean type
superPrint(["a", "b", "c", "d"]); => string type
superPrint([1, 2, true, "a"]); => number or boolean or string type
```

---

### 3-2 generics
```
function superPrint<T>(a : T[]) {
    return a[0]
}

const a = superPrint<number>([1, 2, 3, 4]);
const b = superPrint([1, 2, 3, 4]);
```

---

### 3-3 generics
```
type Player<T> = {
    name : string;
    extraInfo : T
}

const dano : Player<{favFood : string}> = {
    name : "dano",
    extraInfo : {
        favFood : "kimchi"
    }
}
```

---

### 3-4 generics
```
type Player<T> = {
    name : string;
    extraInfo : T
}

type DanoExtra = {
    favFood : string
}

type PlayerDano = Player<DanoExtra>

const dano : PlayerDano = {
    name : "dano",
    extraInfo : {
        favFood : "kimchi"
    }
}

const park : Player<null> = {
    name : park,
    extraInfo : null
}
```

---

### 3-5 generics
```
type A = Array<number>

let a : A = [1, 2, 3, 4];
```