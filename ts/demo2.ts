// 静态类型
interface Point  {
    x : number,
    y : number
}

const point: Point = {
    x: 2,
    y: 6
}

// 静态类型升级版

// 基础类型 null, undefined, boolean, void
const count: number = 123;
const tsName: string = '名字';

// 对象类型
class Person {};

const teacher: {
    name: string,
    age: number
} = {
    name: 'ts',
    age: 100
}
// 数组类型
const countNum: number[] = [1,2,3,4,5,];

const ts: Person = new Person();

const tatal:  () => number = () => {
    return 123;
}

// 类型注解和类型推断