/**
 * 命名空间
 */
namespace Home {
  class Header {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "This is Header page";
      document.body.appendChild(ele);
    }
  }
  class Content {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "This is Content page";
      document.body.appendChild(ele);
    }
  }
  class Footer {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "This is Footer page";
      document.body.appendChild(ele);
    }
  }
export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
