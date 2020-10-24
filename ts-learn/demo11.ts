/**
 *  constructor类的构造函数
 */


// 复杂吧
//  class Person {
//      public name: string;
//      constructor(name: string) {
//          this.name = name;
//      }
//  }

// 简写版
class Person {
    constructor(public name: string) {}
}

// 继承
class Teacher extends Person {
    constructor(public age: number) {
        // 必须调用super
        super("雅典娜");
    }
}

//  传值否则报错
 const teacher = new Person("ck");
 const tea = new Teacher(12);
 console.log(teacher.name);
 console.log(tea.name, tea.age);
