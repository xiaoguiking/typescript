"use strict";
/**
 *  命名空间components
 */
var Components;
(function (Components) {
    // 建立子命名空间
    var SubComponents;
    (function (SubComponents) {
        var Son = /** @class */ (function () {
            function Son() {
            }
            return Son;
        }());
        SubComponents.Son = Son;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement("div");
            ele.innerText = "This is Header page";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement("div");
            ele.innerText = "This is Content page";
            document.body.appendChild(ele);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement("div");
            ele.innerText = "This is Footer page";
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
/**
 * 命名空间
 */
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
