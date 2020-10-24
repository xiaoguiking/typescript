/**
 *  类 class
 */

class Lady {
    content = "teacher"
    sayHello() {
        return this.content
    }
}


class Xiaojiejie extends Lady {
    sayHello() {
        return super.sayHello() + "重写方法"
    }
    sayHelloOne(){
        return "son"
    }
}


// const good = new Lady();
const good = new Xiaojiejie();

console.log(good.sayHello());
console.log(good.sayHelloOne());