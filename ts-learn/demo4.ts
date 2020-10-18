/**
 * type annotation 类型注解 ts不能分析变量类型，就需要使用类型注解
 * type inference  类型推断 ts能自动分析变量类型，就什么都不用做
 */

// 类型推断
let count: number;
count = 123;

let str = "字符串";

const one = 1;
const two = 2;
const sum = one + two; // const sum: number

// 类型推断
function tsDemo(num1: number, num2: number) {
  return num1 + num2;
}

const total = tsDemo(1, 2);

const strObj = {
  name: "天",
  age: 123,
};
