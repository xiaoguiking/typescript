/**
 * 函数参数和返回类型注解
 */

// 返回类型注解

// 第一种形式
function foo(num1: number, num2: number) {
  //   return num1 + num2 + "";
  return num1 + num2;
}

const sumTal: number = foo(1, 2);

// 第二种形式
function foo1(num1: number, num2: number): number {
  //   return num1 + num2 + "";
  return num1 + num2;
}

const sumTal1 = foo(1, 2);

// void: 什么都不返回
function sayHell(): void {
  //   return ""; 报错
  console.log(12);
}

//  一直执行

function forNever(): never {
  throw new Error();
  console.log("执行不到");
}
// forNever();

function forNever1(): never {
  while (true) {}
  console.log("执行不到");
}
forNever1();

// 对象参数写法

// function addNum({ num1, num2 }: { num1: number; num2: number }) {
//   return num1 + num2;
// }

// addNum({ num1: 1, num2: 3 });
// console.log(sumS);

function getNumber({ one }: { one: number }) {
  return one;
}

const oneNum = getNumber({one: 1});

// function add2({ fir }:  { fir: number }): number {
//     return fir;
//   }

//   const tal = add2({fir: 1} );
