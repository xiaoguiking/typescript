/**
 * 抽象类
 * readonly： 只读不写
 */

 class Sum {
    public readonly name: string;
    constructor (name) {
        this.name = name;
    }
 }

 const add = new Sum('只读不写');
//  提示无法修改
// add.name = 'change’;
 console.log(add.name);