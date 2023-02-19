## Interfaces of TypeScript

### 1-1. interface
- `interface`는 오브젝트의 모양을 특정해주기 위한 용도.
- `type`과 달리 오로지 오브젝트의 모양을 타입스크립트에게 설명해주기 위해서만 사용되는 키워드이다.
- `interface`는 `type Health = number`와 같은 형태로 쓰일 수 없다.
```
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

type Player1 = {
    nickname : string,
    team : Team,
    health : Health
}

interface Player2 {
    nickname : string,
    team : Team,
    health : Health
}

const dano : Player1 {
    nickname : "dano",
    team : "red",
    health 10
}
```

### 1-2. interface 상속
- type
```
type User = {
    name : string
}

type Player = User & {

}
```

- interface
```
interface User {

}

interface Player extends User {
    
}
```