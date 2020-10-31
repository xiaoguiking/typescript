/**
 * 联合类型和类型守护
 */

// interface Student {
//   learn: boolean;
//   learning: () => {};
// }
// interface Teacher {
//   learn: boolean;
//   teaching: () => {};
// }

// // 联合类型
// // 第一种判断方式
// function test1 (animal: Student | Teacher) {
//     if(animal.learn) {
//         (animal as Student).learning();
//     } else {
//         (animal as Teacher).teaching();
//     }
// }
// // 第二种判断
// function test2 (animal: Student | Teacher) {
//     if("learning" in animal) {
//         animal.learning();
//     } else {
//         animal.teaching();
//     }
// }

// 案例演示 两数字相加  1.string 拼接 2. number 相加
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

console.log(add("天行", "九歌"));
console.log(add(1, 2));

// 对象联合
class NumberObj {
  count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
      console.log(1111)
    return first.count + second.count;
  }
  return 0;
}

// TODO 日常记录没会

// console.log(addObj({first: "3"},{second: "4"}))