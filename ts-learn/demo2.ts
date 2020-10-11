/**
 * 静态类型
 */

let num: number = 123;

console.log(num);

interface font {
  html: string;
  css: string;
  jq: number;
}

const web: font = {
  html: "html css",
  css: "className",
  jq: 30,
};

console.log(web.html, "html");
console.log(web["css"], "css");
