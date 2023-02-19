## Classes of TypeScript

### 1. class
```
class Player {
    constructor(
        private firstName : string,
        private lastName : string,
        public nickName : string
    ) {}
}

const dano = new Player('dano', 'park', 'sweet-pumpkin');

dano.firstName; => error // firstName = private
dano.nickName
```

---

### 2. abstract class

- 오직 다른 곳에서만 상속받을 수 있는 클래스
- `abstract class`를 상속 받을 수 만 있고, 직접 인스트럭트 할 수 없다.
- `property`가 `private`이라면 해당 클래스를 상속했었어도 접근이 불가.

```
abstract class User {
    constructor(
        private firstName : string,
        private lastName : string,
        public nickname : string
    ) {}
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User {

}

const dano = new Player('dano', 'park', 'sweet-pumpkin');

dano.getFullName();

```

---

### 3. abstract method
- `abstract method`는 `abstract class`를 상속 받는 모든 것들이 구연해야 하는 메서드를 의미한다.
```
abstract class User {
    constructor() {}
    abstract getNickname() : void;
}

class Player extends User {} => error // `getNickName`을 구현하지 않았기 때문.
```

### 4. private vs protected vs public
```
abstract class User {
    constructor(
        protected nickname : string
    ) {}

    abstract getNickname() : void;
}

class Player extends User {
    getNickname() {
        return console.log(this.nickname);
    }
}

const dano = new Player('dano', 'park', 'sweet-pumpkin');

dano.getNickname(); => error // protected는 class 외부에서 인스턴트 할 수 없다.
```

### 5. 접근 가능한 위치

|구분|선언한 클래스 내부|상속받은 클래스 내부|인스턴스|
|:---:|:---:|:---:|:---:|
|private|O|X|X|
|protected|O|O|X|
|public|O|O|O|
---