/**
 * 枚举类型 enum
 */

//  第一种写法

const statusType = {
  edit: "编辑",
  delete: "删除",
  add: "添加",
};

function choose(status) {
    if (status === statusType.edit) {
        return "编辑";
    } else if (status === statusType.delete) {
        return "删除";
    } else if (status === statusType.add) {
        return "添加";
    }
}

const res = choose(statusType.edit);
console.log(`I can ${res}`);

// 枚举方案 默认从0 开始取值
enum Status {
  edit = 1,
  delete,
  add,
}

function choose1(status: any) {
  if (status === Status.edit) {
    return "编辑";
  } else if (status === Status.delete) {
    return "删除";
  } else if (status === Status.add) {
    return "添加";
  }
}

console.log(Status.edit);
console.log(Status.delete);
console.log(Status.add);

// 反向查询
console.log(Status.add, "------------------>", Status[3]);
// const res1 = choose1(Status.add);
const res1 = choose1(2);

console.log(`I can ${res1}`);
