/**
 *  泛型继承
 */

//  原始版
class selectGirl {
  constructor(private girls: string[]) {}
  getGirl(index: number): string {
    return this.girls[index];
  }
}
const girl = new selectGirl(["若明", "胜寒", "傲光"]);
console.log(girl.getGirl(1));

// 泛型版 (既可以传名字，或者编号)
class selectGirl1<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const girl1 = new selectGirl1<string>(["若明", "胜寒", "傲光"]);
console.log(girl1.getGirl(1));

// 接口泛型版
interface Girl {
  name: string;
}
class selectGirl2<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const girl2 = new selectGirl2([
  { name: "若明" },
  { name: "胜寒" },
  { name: "傲光" },
]);
console.log(girl2.getGirl(2));
