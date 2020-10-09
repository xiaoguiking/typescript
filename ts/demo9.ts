/**
 * 静态属性 Getter 和Setter 
 */
class Person {
    // 私有属性
    constructor(private _name: string) {}
    get name () {
        return this._name + ' change';
    }
    set name(name: string) {
        const realName = name.split(' ')[0];
        this._name = realName;
    }
}

const person = new Person('lan');
// 可以省略()
// console.log(person.getName)
console.log(person.name)
person.name = "dell ling";
console.log(person.name);

/**
 * 单例模式
 * 只能new 一次
 */

 class Demo {
     private static instance: Demo;
     private constructor (public name: string) {}
     static getInstance () {
         if(!this.instance) {
             this.instance = new Demo('单例模式');
         } 
         return this.instance;
     }
 }

 const demo1 = Demo.getInstance();
 const demo2 = Demo.getInstance();
 console.log(demo1.name, 'demo1');
 console.log(demo2.name, 'demo2');
//  单例模式 demo1
// 单例模式 demo2