/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Cmd-R)；
 * 2. 查看 对返回值使用对象查看器 (Cmd-I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Cmd-L)
 */


/// 函数

function square(number) {
  return number * number;
}

/*
如果你传递一个对象（即一个非原始值，例如Array或用户自定义的对象）作为参数，
而函数改变了这个对象的属性，这样的改变对函数外部是可见的
*/
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make;
// alert(x);

myFunc(mycar);
y = mycar.make;
// alert(y);

// 函数表达式
// 匿名
var square2 = function(number) { return number * number; };
x = square2(4);
// alert(x);

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n-1) };
// alert(factorial(3));


function map(f, a) {
  var result = [];
  var i;
  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
var f = function(x) {
  return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f, numbers);
// alert(cube);

// 函数作用域
var num1 = 20, num2 = 3, name = "Chamahk";

function multiply() {
  return num1 * num2;
}
// alert(multiply());

function getScore() {
  var num1 = 2, num2 = 3;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  
  return add();
}
// alert(getScore());


var foo = function bar() {
  // statement go here
};
// 以下语句等价
// bar();
// arguments.callee();
// foo();

// 嵌套函数和闭包
/*
内部函数只可以在外部函数中访问。
内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量
*/
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3);
result = fn_inside(5);
// alert(result);
result1 = outside(3)(5);
// alert(result1);

// 闭包
var pet = function(name) { //外部函数定义了一个变量"name"
  var getName = function() {
    //内部函数可以访问外部函数定义的"name"
    return name;
  }
  //返回这个内部函数，从而将其暴露在外部函数作用域
  return getName;
}
myPet = pet("Vivie");
// alert(myPet());

var createPet = function(name) {
  var sex;
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female"))
      {
        sex = newSex;
      }
    }
  }
}

pet = createPet("Vivie");
// alert(pet.getName());

pet.setName("Oliver");
pet.setSex("male");
// alert(pet.getSex());
// alert(pet.getName());

/*
如果一个闭包的函数定义了一个和外部函数的某个变量名称相同的变量，那么这个闭包将无法引用外部函数的这个变量

var createPet = function(name) { // Outer function defines a variable called "name"
  return {
    setName: function(name) {  // Enclosed function also defines a variable called "name"
      name = name;     // ??? How do we access the "name" defined by the outer function ???
    }
  }
}

*/


// 使用 arguments 对象
function myConcat(separator) {
  var result = '';
  var i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  
  return result;
}

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");
// alert(myConcat(", ", "red", "orange", "blue"));

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// alert(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// alert(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));


// 函数参数
// 默认参数
function multiply(a, b = 1) {
  return a * b;
}
multiply(5);
// alert(multiply(5));

// 剩余参数
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}
var a = multiply(2, 1, 2, 3);
// alert(a);


// 箭头函数
var a1 = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];
var a2 = a1.map(function(s) { return s.length });
// alert(a2);  // logs [ 8, 6, 7, 9 ]
var a3 = a1.map( s => s.length );
// alert(a3);  // logs [ 8, 6, 7, 9 ]


// this 的词法
/*
在箭头函数出现之前，每一个新函数都重新定义了自己的 this 值（在严格模式下，一个新的对象在构造函数里是未定义的，
以“对象方法”的方式调用的函数是上下文对象等）。以面向对象的编程风格，这样着实有点恼人
*/
function Person() {
  // the Person() constructor defines `this` as itself
  this.age = 0;
  
  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}
var p = new Person();
alert(p);

// 在ECMAScript 3/5里，通过把this的值赋值给一个变量可以修复这个问题
function Person1() {
  var self = this;
  
  self.age = 0;
  
  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

// 箭头函数捕捉闭包上下文的this值，所以下面的代码工作正常
function Person2() {
  this.age = 0;
  setInterval( () => {
    this.age++;
  }, 1000);
}




