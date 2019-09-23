/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Cmd-R)；
 * 2. 查看 对返回值使用对象查看器 (Cmd-I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Cmd-L)
 */

// function greetMe(user) {
//   alert("Hi " + user);
// }

// greetMe("Alice");


/// 语法和数据类型
// 变量
/*
// var x = 42;  // 用来声明局部变量和全局变量
// let y = 13;  // 用来声明块作用域的局部变量
*/

/*
var a;
console.log("The value of a is " + a); // a 的值是 undefined

console.log("The value of b is " + b);// b 的值是 undefined 
var b;

console.log("The value of c is " + c); // 未捕获的引用错误： c 未被定义

let x;
console.log("The value of x is " + x); // x 的值是 undefined

console.log("The value of y is " + y);// 未捕获的引用错误： y 未被定义
let y;
*/

/*
var input;
if(input === undefined) {
  doThis();
} else {
  doThat();
}
*/


// var myArray = [];
// if (!myArray[0]) myFunction();

// var a;
// a + 2; // 计算为 NaN

// 函数提升
// 只有函数声明会被提升到顶部，而函数表达式不会被提升。
/* 函数声明*/
// foo();
// function foo() {
//   console.log("bar");
// }

/*函数表达式*/
/*
baz();
var baz = function() {
  console.log("bar2");
}
*/

/* 数据结构和类型*/
/*
七种基本数据类型:
1、布尔值（Boolean），有2个值分别是：true 和 false.
2、null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
3、undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未定义时的属性。
4、数字（Number），整数或浮点数，例如： 42 或者 3.14159。
5、任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
6、字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
7、代表（Symbol） ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。

对象（Object）

*/

// 数据类型的转换
var answer = 42;
answer = "thanks for all the fish..."; // 因为 JavaScript 是动态类型的，这种赋值方式并不会提示出错。

x = "the answer is " + 42; // "The answer is 42"
y = 42 + " is the answer" // "42 is the answer"

// 在涉及其它运算符（译注：如下面的减号'-'）时，JavaScript语言不会把数字变为字符串。例如（译注：第一例是数学运算，第二例是字符串运算）：
"37" - 7; // 30
"37" + 7; // "377"

// 字符串转换为数字
// "1.1" + "1.1" = "1.11.1"
// (+"1.1") + (+"1.1") = 2.2   
// 注意：加入括号为清楚起见，不是必需的。


// 数组字面量
var coffees = ["French Roast", "Colombian", "Kona"];

var a=[3];

console.log(a.length); // 1

console.log(a[0]); // 3

var fish = ["Lion", , "Angel"]; // 在这个数组中，有两个已被赋值的元素，和一个空元素（fish[0]是"Lion"，fish[1]是undefined，而fish[2]是"Angel"；译注：此时数组的长度属性fish.length是3)。


// 对象字面量
/*
以下是一个对象字面值的例子。对象car的第一个元素（译注：即一个属性/值对）定义了属性myCar；
第二个元素，属性getCar，引用了一个函数（即CarTypes("Honda")）；
第三个元素，属性special，使用了一个已有的变量（即Sales）。*/
var Sales = "Toyota";

function CarTypes(name) {
  return (name === "Honda") ?
    name :
    "Sorry, we don't sell " + name + "." ;
}

var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

// 更进一步的，你可以使用数字或字符串字面值作为属性的名字，或者在另一个字面值内嵌套上一个字面值。如下的示例中使用了这些可选项。
var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

/*
对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的javascript标识符，它必须用""包裹。
属性的名字不合法，那么便不能用.访问属性值，而是通过类数组标记("[]")访问和赋值。
*/
// var unusualPropertyNames = {
//   "": "An empty string",
//   "!": "Bang!"
// }
/*
Exception: SyntaxError: expected property name, got end of script
@Scratchpad/1:4
*/
// console.log(unusualPropertyNames."");   // 语法错误: Unexpected string
// console.log(unusualPropertyNames[""]);  // An empty string
// console.log(unusualPropertyNames.!);    // 语法错误: Unexpected token !
// console.log(unusualPropertyNames["!"]); // Bang!

// Basic literal string creation
// `In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
not legal`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`


