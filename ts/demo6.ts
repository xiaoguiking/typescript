// interface 接口

/**
 * age?------> ? 属性可有可无
 * readname name ----> 属性可读
 * [propName: string]: any, -------> 其他多余属性
 * 接口可以继承interface
 * interface 可以定义一个具体的方法
 */


interface Person {
    name: string,
    // readonly name: string,
    // 可有可无属性
    age?: number,
    // 可以多出其他属性类型
    [propName: string]: any,
    say(): string
}

const getPersonName = (person: Person) => {
    console.log(person.name)
    console.log(person.age);
}

const setPersonName = (person: Person, name: string ) => {
    person.name = name;
}

const person = {
    name: "change",
    sex: '男',
    say() {
        return 'say hello '
    }
}

getPersonName(person);
// 直接赋值报错
// getPersonName({
//     name: "change",
//     sex: '男'  
// })

setPersonName(person, "less");

// 类应用一个接口,必须存在接口里面所有的属性
class User1 implements Person {
    name: 'l3'
    say() {
        return '123'
    }
}

// 接口之间互相继承
interface Tea extends Person {
    teach(): string
}

// 接口自身定义函数 ----> 接受一个string类型返回一个string 
interface SayHi {
    (word: string): string
}

const say: SayHi = (word) => {
    return word
}