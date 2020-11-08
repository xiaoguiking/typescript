/**
 *  命名空间components
 */

namespace Components {
  // 建立子命名空间
  export namespace SubComponents {
    export class Son {}
  }
  export class Header {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "This is Header page";
      document.body.appendChild(ele);
    }
  }
  export class Content {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "This is Content page";
      document.body.appendChild(ele);
    }
  }
  export class Footer {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "This is Footer page";
      document.body.appendChild(ele);
    }
  }
}
