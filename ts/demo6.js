// interface 接口
var getPersonName = function (person) {
    console.log(person.name);
    console.log(person.age);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: "change",
    sex: '男',
    say: function () {
        return 'say hello ';
    }
};
getPersonName(person);
// 直接赋值报错
// getPersonName({
//     name: "change",
//     sex: '男'  
// })
setPersonName(person, "less");
// 类应用一个接口,必须存在接口里面所有的属性
var User1 = /** @class */ (function () {
    function User1() {
    } 
    User1.prototype.say = function () {
        return '123';
    };
    return User1;
}());
var say = function (word) {
    return word;
};
