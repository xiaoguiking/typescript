/**
 *  抽象类和只读属性
 */

class Group {
  public readonly _name: string;
  constructor( name: string) {
       this._name = name;
  }
}

const grou1 = new Group("第一组");
// grou1._name = "修改提示报错"
console.log(grou1._name);


// 抽象类  继承之后需要使用实现不同的业务逻辑
abstract class Gril {
    abstract learn()
}


class small  extends Gril {
    learn () {
        console.log('small');
    }
}

class middle  extends Gril {
    learn () {
        console.log('middle');
    }
}

class large  extends Gril {
    learn () {
        console.log('large');
    }
}