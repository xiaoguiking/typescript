/**
 * 数组和元组
 */

 
// number 数组
const numberArr: number[] = [1,2,3,4,5,];
// string 数组
const stringArr: string[] = ['字符串', '只能存储字符串'];

// number, string 数组混合
const arr: (number | string)[] = [1,2,3,4,5, '字符串混合'];

// undefined 数组
const undefinedArr: undefined[] = [undefined];

// 设置type alias别名
type User =  {name: string, age: number};

// 对象数组
const objectArr: User[] =  [{
    name: 'ling',
    age: 2
}];


// other
class Teacher{
    name: string
    age: number
}

const objArr: Teacher[]  = [
    new Teacher(),
    {
        name: 'lan',
        age: 23
    }
] 


// 元组 tuple  长度固定，类型确定
const teaInfo :[string, string, number] = ['字符串1', '字符串2', 23,]
// 实例csv文件

const dataList: ([string, number])[] = [
    ['king', 12],
    ['king1', 12],
    ['king2', 12]
]