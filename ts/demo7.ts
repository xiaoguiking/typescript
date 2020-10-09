
/**
 * 类的定义与继承
 */
class Person {
    name = "king";
    getName() {
        return this.name;
    }
}

const usPerson = new Person();
console.log(usPerson.getName());

// 继承
class Teacher extends Person {
    getTeacherName() {
        return 'teacher';
    }
    // 子类属性重写父类
    getName() {
        return super.getName() + '----> 新的重写内容';
    }
}
const teacher = new Teacher();
console.log(teacher.getName(), '继承');
console.log(teacher.getTeacherName());