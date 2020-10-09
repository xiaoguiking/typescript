/**
 * 类中的访问类型和构造器
 * private  允许类内被调用
 * protected  允许在类内或者继承的子类中调用。
 * public 允许在类的内外被调用
 */

class Person {
    public name: string;
    protected age: number;
    private sex: string;
    sayHi() {
        console.log('Hi');
    }
}

class Teacher extends Person {
    public sayBye() {
        this.name;
    }
    protected sayOne() {
        this.age;
    }
    public sayTwo() {
        // this.sex;
    }
}

const person = new Person();
person.name = "xiaogui";

console.log(person.name)
person.sayHi();


// 构造器 constructor
class PersonOne {
    // 传统写法
    // public name: string;
    // constructor(name: string) {
    //     this.name = name;
    // }

    // 简便写法
    constructor(public name: string) {}
}
const personOne = new PersonOne('kingOne');
console.log(personOne.name)


// super
class Group {
    constructor(public name: string) {}
}

// 子类
class GroupOne extends Group {
    constructor(public age: number) {
        super('继承自父类');
    }
}

const groupOne = new GroupOne(67);
console.log(groupOne.age)
