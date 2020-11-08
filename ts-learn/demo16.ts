/**
 *  泛型
 */
function join(fir: string | number, sec: string | number) {
  return `${fir}${sec}`;
}

console.log(join("html", 2));

// 需求1 都是字符串 （使用泛型

function join1<T>(fir: T, sec: T) {
  return `${fir}${sec}`;
}
console.log(join1<string>("html", "泛型"));

// 泛型中数组使用
function myFun<ANY>(params: ANY[]) {
  return params;
}

myFun<string>(["泛型", "数组"]);

function myFun1<ANY>(params: Array<ANY>) {
  return params;
}

myFun<string>(["泛型", "数组"]);

// 多个泛型定义
function foo<T, P>(fir: T, sec: P) {
  return `${fir}${sec}`;
}
foo<string, number>("泛型1", 123);
