## Polymorphism of typescript
### 1. polymorphism
- `generic`은 다른 타입에게 물려줄 수 있다.
```
interface SStorage<T> {
    [key : string] : T 
}

class LocalStorage<T> {
    private storage : SStorage<T> = {}
}

```

### 1-2. polymorphism
```
interface SStorage<T> {
    [key : string] : T 
}

class LocalStorage<T> {
    private storage : SStorage<T> = {}

    set(key : string, value : T) {
        this.storage[key] = value;
    }

    remove(key : string) {
        delete this.storage[key];
    }

    get(key : string) : T {
        return this.storage[key];
    }

    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("answer"); 
stringsStorage.set("hello", "How are you?"); => string

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx") => boolean
booleansStorage.set("hello", true) => boolean
```