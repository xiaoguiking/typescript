// demo1.ts

// 第一种
function tsDemo(data) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}
// 直接报错，没有参数
// tsDemo();

// 正确形式 第二种
function tsDemo1(data: { x: number, y: number }) {
    // 编辑器友好的提示
    return Math.sqrt(data.x ** 2 + data.y ** 2);
    // return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsDemo1({ x: 1, y: 2 });

// 高级写法
interface point { x: number, y: number };
function tsDemo2(data: point) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo2({ x: 2, y: 4 });
