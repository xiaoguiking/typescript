/**
 * 接口 interface
 */


// 接口

interface Person {
    name: string,
    age: number,
    sex: string
}

// 第一种方式
// const getPerson = (name: string, age: number, sex: string) => {
//     // age < 30 && sex  >= 90  && console.log(name + '进入面试');
//     // age >= 30 || sex  < 90 && console.log(name + '被淘汰')
//     if (age >= 28 && sex  === "女") {
//         console.log(name + '进入面试');
//     } else if (age < 28 || sex === "男" ) {
//         console.log(name + '被淘汰')
//     }
// }

// const getRes = (name: string, age: number, sex: string) => {
//     console.log(name +  '年龄是'+ age)
//     console.log(name +  '性别是'+ sex)
// }

// getPerson('tiankong', 28, "女" );
// getPerson('waner', 33, "男" );
// getRes('tiankong', 28, "女");

// 接口版本
interface Person {
    name: string,
    age: number,
    sex: string
}

const personOne =  {
   name: 'tiankiong',
   age:  30,
   sex: "女"
}

const getPerson = (personOne: Person) => {
    // age < 30 && sex  >= 90  && console.log(name + '进入面试');
    // age >= 30 || sex  < 90 && console.log(name + '被淘汰')
    if (personOne.age >= 28 && personOne.sex  === "女") {
        console.log(personOne.name + '进入面试');
    } else if (personOne.age < 28 || personOne.sex === "男" ) {
        console.log(personOne.name + '被淘汰')
    }
}

const getRes = (personOne: Person) => {
    console.log(personOne.name +  '年龄是'+personOne.age)
    console.log(personOne.name +  '性别是'+ personOne.sex)
}

getPerson(personOne );
getRes(personOne);