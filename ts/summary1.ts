// 总结

// 基本类型: null, number, undefined, string, boolean, void, symbol
let countOther: number = 123;

// 对象类型： object {}， function, Class, []
// 此处可以省略number
const fun1 = (str: string): number => parseInt(str, 10); //const fun1: (str: string) => number

const fun2 : (str: string) => number = (str) => parseInt(str, 10) //const fun2: (str: string) => number


// 其他case
interface des{
    name: 'string'
}

const data = '{"name": "注解"}';
// 需要注解 
const reData: des = JSON.parse(data);

// 赋值方案
let temp: number | string = 123;
temp = '赋值为字符串'
