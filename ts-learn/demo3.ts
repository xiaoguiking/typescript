/**
 * 基础静态类型对象静态类型
 */

// 基础静态类型

const numSum: number = 123;
const myStr: string = "字符串";

// undefined null boolean void, symbol

// 对象静态类型: 对象类型 数组类型 函数类型 类类型

const obj: {
  name: string;
  age: number;
} = {
  name: "change",
  age: 123,
};

const strArr: string[] = ["字符串1", "字符串2"];

class Person {}
const personOne: Person = new Person();

const foo: () => string = () => "字符串";
