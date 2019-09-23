/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Cmd-R)；
 * 2. 查看 对返回值使用对象查看器 (Cmd-I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Cmd-L)
 */

/// 流程控制与错误处理

// 语句块
// 最基本的语句是用于组合语句的语句块。该块由一对大括号界定
/*
{
   statement_1;   
   statement_2;
   statement_3;
   .
   .
   .
   statement_n;
}
*/

var x = 1;
{
  var x = 2;
}
// alert(x); // 输出的结果为 2

/*
if (condition_1) {
  statement_1;
}else if (condition_2) {
  statement_2;
}else if (condition_n_1) {
  statement_n;
}else {
  statement_last;
}
*/

/*
下面这些值将被计算出 false (also known as Falsy values):

false
undefined
null
0
NaN
空字符串（""）
当传递给条件语句所有其他的值，包括所有对象会被计算为真 。
*/
// 请不要混淆原始的布尔值true和false 与 Boolean对象的真和假。例如：
// var b = new Boolean(false);
// if (b) {
//   alert("结果视为真");
// }
// if (b == true) {
//   alert("结果视为假");
// }


// throw语句
// throw "Error2";   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw {toString: function() { return "I'm an object!"; } };

/*
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler -> your own function
}
*/

/*
finally块

finally块包含了在try和catch块完成后、下面接着try...catch的语句之前执行的语句。
finally块无论是否抛出异常都会执行。如果抛出了一个异常，就算没有异常处理，finally块里的语句也会执行。

openMyFile();
try {
    writeMyFile(theData); //This may throw a error
}catch(e){
    handleError(e); // If we got a error we handle it
}finally {
    closeMyFile(); // always close the resource
}


如果finally块返回一个值，该值会是整个try-catch-finally流程的返回值，不管在try和catch块中语句返回了什么：
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false


用finally块覆盖返回值也适用于在catch块内抛出或重新抛出的异常：
function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until 
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"

*/




// Promises
/*
Promise 对象有以下几种状态：

pending：初始的状态，即正在执行，不处于 fulfilled 或 rejected 状态。
fulfilled：成功的完成了操作。
rejected：失败，没有完成操作。
settled：Promise 处于 fulfilled 或 rejected 二者中的任意一个状态, 不会是 pending
*/
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' 
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}



