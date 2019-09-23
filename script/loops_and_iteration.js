/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Cmd-R)；
 * 2. 查看 对返回值使用对象查看器 (Cmd-I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Cmd-L)
 */


/// 循环与迭代


/*
JavaScript中提供了这些循环语句：

for 语句
do...while 语句
while 语句
labeled 语句
break 语句
continue 语句
for...in 语句
for...of 语句

*/


// label 语句
/*
label:
    statement
*/

// 未添加 Label:
var num = 0;
for (var i = 0; i < 10; i++) {  // i 循环
  for (var j = 0; j < 10; j++) {  // j 循环
    if(i == 5 && j == 5) {
      break;  // i = 5，j = 5 时，会跳出 j 循环
    }// 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
    num++;
  }
}
alert(num); // 输出 95

// 添加 Label 后:
num = 0;
outPoint:
for (var i = 0; i < 10; i++) {  // i 循环
  for (var j = 0; j < 10; j++) {  // j 循环
    if(i == 5 && j == 5) {
      break outPoint;  // 在 i = 5，j = 5 时，跳出所有循环，返回到整个 outPoint 下方，继续执行
    }
    num++;
  }
}
alert(num); // 输出 55

// 使用 continue 语句，则可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些:
num = 0;
outPoint:
for(var i = 0; i < 10; i++) {
  for(var j = 0; j < 10; j++) {
    if(i == 5 && j == 5) {
      continue outPoint;
    }
    num++;
  }
}
alert(num);  // 95


// 数组
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // 输出 "3", "5", "7"
}
// 注意 for...of 的输出没有出现 "hello"


