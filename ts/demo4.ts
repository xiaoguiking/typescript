// 函数相关类型

function hello() {}
const hello1 = function () {};
const hello2 = function () {};

// 函数注解 想要得到的类型
function add(fir: number, sec: number): number {
  return fir + sec;
}
const sumNum = add(1, 2);

// void，返回为空
function sayHello(): void {
  console.log("123");
}
// never 永远不能执行到最后
function errorEmitter(): never {
  throw new Error();
}

// 结构赋值类型注解
function add1({ fir, sec }: { fir: number; sec: number }): number {
  return fir + sec;
}
const addSum = add1({ fir: 1, sec: 5 });

// 解构

function add2({ fir }: { fir: number }): number {
  return fir;
}

const tal = add2({fir: 1} );
