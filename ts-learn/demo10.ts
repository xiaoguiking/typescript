/**
 *  类的访问类型 public  private protected
 * public 内部外部调用都可以
 * private  仅限内部使用
 *  protected 类的内部使用, 继承使用可以
 */

class Person {
  public name: string;
  public sayHello() {
      console.log(this.name +  ' sayHello');
  }
  // private 仅限内部使用
  private age: number;
  protected sex: string

}

const person = new Person();
person.name = "public 内部外部调用都可以";
person.sayHello();
// private 外部调用报错
// person.age = 123

//protected 限制内部使用，外部使用报错
// person.sex = "girl" 

console.log(person.name);

class Teacher extends Person {
    public sayBye() {
        console.log(this.sex + '你好')
    }
}

const tea = new Teacher();
console.log(tea.sayBye())