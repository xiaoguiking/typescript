/**
 * 接口inferface
 */

 interface Boy  {
     name: string,
     age: number,
    //  是否有性别
     sex?: string,
    // 是否其他属性
    [propname: string]: any,
    say(): string

 }

// 继承 extends 接口
interface Father extends Boy {
    sayHello(): string
}


// 受到Boy 约束的类
class Son implements Boy {
    name: 'blue';
    age: 12;
    say() {
        return "blue"
    }
}



 const boy = {
     name: '水寒',
     age: 42,
     sex: "男",
     money: 123,
     say() {
         return 'hello'
     }
 }
 const getBoy = (boy: Boy) => {
    if (boy.age >= 30) {
        boy.sex && console.log('男')
        boy.say && console.log('hello1');
        console.log('星魂')
    } else {
        console.log("焱妃")
    }
 }

 getBoy(boy);