/**
 * getter setter
 */

class Xiaojeijie {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10;
  }
  set age(age: number) {
    this._age = age + 10;
  }
}

const ling = new Xiaojeijie(25);
ling.age = 88;
console.log(ling.age);

//  静态类使用static

class Gril {
  static sayHello() {
    return "hello";
  }
}

// 不能new对象 直接调用

console.log(Gril.sayHello());