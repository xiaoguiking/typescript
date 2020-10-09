// 类型注解 type annotation  注解告诉ts变量是什么类型
// 类型推断 type inference  ts自动尝试分析变量的类型 （函数无法推断，使用注解形式去解释）
// 如果ts能够自动分析变量类型，什么都不用做
// 如果ts无法分析变量类型，那就需要类型注解。


// 类型注解告诉ts
let numCount: number;
numCount = 123;

// 类型推断
let numInference = 123; // (let numInference: number)

// 注解:
const firNum = 123;
const secNum = 56;
const sum = firNum + secNum; // (const sum: number)

// 函数：推断
const  getTotal = (firNum: number, secNum: number) => firNum + secNum;

const total = getTotal(1, 2); // (const total: number)