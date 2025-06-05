"use strict";
let age = 20;
let a = [1, 2, 34, 5];
console.log(a[2]);
let b = [1, 'nidhi'];
var size;
(function (size) {
    size[size["small"] = 2] = "small";
    size[size["medium"] = 3] = "medium";
    size[size["large"] = 4] = "large";
})(size || (size = {}));
;
let mysize = size.medium;
console.log(mysize);
