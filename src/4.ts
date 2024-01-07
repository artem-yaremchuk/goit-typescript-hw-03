class Key {
    private signature: number = Math.random();

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door = false;
    private tenants: Person[] = [];

    constructor(protected key: Key) {}

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            return this.door = true;
        }
        return false;
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};