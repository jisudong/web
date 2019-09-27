/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Cmd-R)；
 * 2. 查看 对返回值使用对象查看器 (Cmd-I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Cmd-L)
 */



///赋值运算符

/*
   名字                                           简写的操作符                  含义
   
赋值(Assignment)	                                 x = y	                  x = y
加法赋值(Addition assignment)	                      x += y	                 x = x + y
减法赋值(Subtraction assignment)	                  x -= y	                 x = x - y
乘法赋值(Multiplication assignment)	                x *= y	                 x = x * y
除法赋值(Division assignment)	                      x /= y	                 x = x / y
求余赋值(Remainder assignment)	                    x %= y	                 x = x % y
求幂赋值(Exponentiation assignment)	                x **= y	                 x = x ** y
左移位赋值(Left shift assignment)	                  x <<= y	                x = x << y
右移位赋值(Right shift assignment)	                  x >>= y	                x = x >> y
无符号右移位赋值(Unsigned right shift assignment)	    x >>>= y	              x = x >>> y
按位与赋值(Bitwise AND assignment)	                  x &= y	                x = x & y
按位异或赋值(Bitwise XOR assignment)	               x ^= y	                 x = x ^ y
按位或赋值(Bitwise OR assignment)	                  x |= y	                x = x | y
*/


// 解构
var foo = ["one", "two", "three"];

// 不使用解构
var one = foo[0];
var two = foo[1];
var three = foo[2];

// 使用解构
var [one, two, three] = foo;





/// 比较运算符
/*
 全等（===）:  两边操作数相等且类型相同时返回true。
*/



/// 算术运算符
/*
  指数运算符（**）:  2 ** 3 return 8.       10 ** -1 return 0.1
*/



/// 字符串运算符
// alert("my " + "string");
var myString = "alpha";
myString += "bet";  // 返回 "alphabet"




/// 一元操作符

// delete
/*
  delete操作符，删除一个对象或一个对象的属性或者一个数组中某一个键值。语法如下:
  delete objectName;
  delete objectName.property;
  delete objectName[index];
  delete property; // legal only within a with statement
  
  第四行的形式只在with声明的状态下是合法的， 从对象中删除一个属性。

  你能使用 delete 删除各种各样的隐式声明， 但是被var声明的除外。

  如果 delete 操作成功，属性或者元素会变成 undefined。如果 delete可行会返回true，如果不成功返回false。
*/
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

// 删除数组元素
/*
  删除数组中的元素时，数组的长度是不变的，例如删除a[3], a[4]，a[4]和a[3] 仍然存在变成了undefined
*/
// delete 删除数组中的一个元素，这个元素就不在数组中了。例如，trees[3]被删除，trees[3] 仍然可寻址并返回undefined。
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
for (x in trees) {
  console.log(x);
}
if (3 in trees) {
  // 不会被执行
}

// 如果想让数组中存在一个元素但是是undefined值，使用undefined关键字而不是delete操作. 
// 如下： trees[3]分配一个undefined,但是这个数组元素仍然存在:
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
// alert(3 in trees);
if (3 in trees) {
  // 会被执行
}

// typeof
/*
  typeof operand
  typeof (operand)
  
  typeof操作符返回一个表示 operand 类型的字符串值。
  operand 可为字符串、变量、关键词或对象，其类型将被返回。operand 两侧的括号为可选。
*/
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"

// 对于关键词 true 和 null， typeof 操作符将会返回如下结果：
typeof true;  // returns "boolean"
typeof null;  // returns "object"

// 对于一个数值或字符串， typeof 操作符将会返回如下结果：
typeof 62;              // returns "number"
typeof "Hello world";   // returns "string"

// 对于属性值，typeof 操作符将会返回属性所包含值的类型：
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"

// 对于方法和函数，typeof 操作符将会返回如下结果：
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"

// 对于预定义的对象，typeof 操作符将会返回如下结果：
typeof Date;      // returns "function"
typeof Function;  // returns "function"
typeof Math;      // returns "object"
typeof Option;    // returns "function"
typeof String;    // returns "function"

// void
/*
  void (expression)
  void expression
  void运算符,表明一个运算没有返回值。expression是javaScript表达式，括号中的表达式是一个
  可选项，当然使用该方式是一种好的形式。
  
  可以使用void运算符指明一个超文本链接。该表达式是有效的，但是并不会在当前文档中进行加载。
  
  如下创建了一个超链接文本，当用户单击该文本时，不会有任何效果。
  <a href="javascript:void(0)">Click here to do nothing</a>
*/





/// 关系操作符

// in
/*
  in操作符，如果所指定的属性确实存在于所指定的对象中，则会返回true，语法如下：
  
  propNameOrNumber in objectName
  
  在这里 propNameOrNumber可以是一个代表着属性名的字符串或者是一个代表着数组索引的数值表达式，而objectName则是一个对象名。
*/
// arrays
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
"bay" in trees;    // returns false (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// predefined objects
"PI" in Math;         // returns true
var myString = new String("coral");
"length" in myString; // return true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar;   // returns true
"model" in mycar;  // returns true
"Accord" in mycar; // returns false

// instanceof
/*
  如果所判别的对象确实是所指定的类型，则返回true。其语法如下：
  
  objectName instanceof objectType
  
  objectName 是需要做判别的对象的名称,而objectType是假定的对象的类型, 例如Date或 Array.
*/
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}



/// 左值表达式

// new
/* 
  你可以使用new operator 创建一个自定义类型或者是预置类型的对象实例。用法如下：
  
  var objectName = new objectType([param1, param2, ..., paramN]);
*/

// 扩展语句
/*
  扩展语句符允许一个表达式在原地展开， 当需要多个参数 (比如函数调用时) 或者多个值(比如字面量数组) 。
  
  例如：现在你有一个数组，你想创建一个新数组，并将刚才那个作为它的一部分，用array的字面语法是不够的，
  你不得不写一些代码实现它，比如用些push, splice, concat等等。但是用spread syntax就没问题了：
  
  var parts = ['shoulder', 'knees'];
  var lyrics = ['head', ...parts, 'and', 'toes'];
  
  类似的，扩展语句也可以用在函数调用的时候:
  
  function f(x, y, z) { }
  var args = [0, 1, 2];
  f(...args);
*/



