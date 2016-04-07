var a = 0;
function changeA(){
  a+=10;
}

function changeAB(b){
  a+=b;
}

changeA();

changeAB(20);

console.log(a);



// debug> restart
// program terminated
// < Debugger listening on port 5858
// debug> . ok
// break in debug_error_performance/debug.js:1
// > 1 var a = 0;
//   2 function changeA(){
//   3   a+=10;
// debug> n
// break in debug_error_performance/debug.js:10
//   8 }
//   9 
// >10 changeA();
//  11 
//  12 changeAB(20);
// debug> watch('a')
// debug> n
// break in debug_error_performance/debug.js:12
// Watchers:
//   0: a = 10

//  10 changeA();
//  11 
// >12 changeAB(20);
//  13 
//  14 console.log(a);
// debug> watchers
//   0: a = 10
// debug> list(10)
//   2 function changeA(){
//   3   a+=10;
//   4 }
//   5 
//   6 function changeAB(b){
//   7   a+=b;
//   8 }
//   9 
//  10 changeA();
//  11 
// >12 changeAB(20);
//  13 
//  14 console.log(a);
//  15 
//  16 });
// debug> step
// break in debug_error_performance/debug.js:7
// Watchers:
//   0: a = 10

//   5 
//   6 function changeAB(b){
// > 7   a+=b;
//   8 }
//   9 
// debug> next
// break in debug_error_performance/debug.js:8
// Watchers:
//   0: a = 30

//   6 function changeAB(b){
//   7   a+=b;
// > 8 }
//   9 
//  10 changeA();
// debug> watchers
//   0: a = 30
// debug> step
// break in debug_error_performance/debug.js:14
// Watchers:
//   0: a = 30

//  12 changeAB(20);
//  13 
// >14 console.log(a);
//  15 
//  16 });
// debug> restart
// program terminated
// < Debugger listening on port 5858
// debug> . ok
// break in debug_error_performance/debug.js:1
// Watchers:
//   0: a = undefined

// > 1 var a = 0;
//   2 function changeA(){
//   3   a+=10;
// debug> n
// break in debug_error_performance/debug.js:10
// Watchers:
//   0: a = 0

//   8 }
//   9 
// >10 changeA();
//  11 
//  12 changeAB(20);
// debug> step
// break in debug_error_performance/debug.js:3
// Watchers:
//   0: a = 0

//   1 var a = 0;
//   2 function changeA(){
// > 3   a+=10;
//   4 }
//   5 
// debug> watches
// repl:1
// debug> watch
// watch     watchers  

// debug> watchers
//   0: a = 0
// 10)
// debug> n
// break in debug_error_performance/debug.js:4
// Watchers:
//   0: a = 10

//   2 function changeA(){
//   3   a+=10;
// > 4 }
//   5 
//   6 function changeAB(b){
// debug> sb
// [Function: bound ]
// debug> list
// [Function: bound ]
// debug> n
// break in debug_error_performance/debug.js:12
// Watchers:
//   0: a = 10

//  10 changeA();
//  11 
// >12 changeAB(20);
//  13 
//  14 console.log(a);
// debug> list(10)
//   2 function changeA(){
//   3   a+=10;
//   4 }
//   5 
//   6 function changeAB(b){
//   7   a+=b;
//   8 }
//   9 
//  10 changeA();
//  11 
// >12 changeAB(20);
//  13 
//  14 console.log(a);
//  15 
//  16 });
// debug> sb
// [Function: bound ]
// debug> sb()
//   7   a+=b;
//   8 }
//   9 
//  10 changeA();
//  11 
// >12 changeAB(20);
//  13 
//  14 console.log(a);
//  15 
//  16 });
// debug> n
// break in debug_error_performance/debug.js:14
// Watchers:
//   0: a = 30

// *12 changeAB(20);
//  13 
// >14 console.log(a);
//  15 
//  16 });
// debug> restart
// program terminated
// < Debugger listening on port 5858
// debug> . ok
// Restoring breakpoint /Volumes/MacintoshHD/github/Nodejs-Example/debug_error_performance/debug.js:12
// Warning: script '/Volumes/MacintoshHD/github/Nodejs-Example/debug_error_performance/debug.js' was not loaded yet.
// break in debug_error_performance/debug.js:1
// Watchers:
//   0: a = undefined

// > 1 var a = 0;
//   2 function changeA(){
//   3   a+=10;
// debug> n
// break in debug_error_performance/debug.js:10
// Watchers:
//   0: a = 0

//   8 }
//   9 
// >10 changeA();
//  11 
// *12 changeAB(20);
// debug> cont
// break in debug_error_performance/debug.js:12
// Watchers:
//   0: a = 10

//  10 changeA();
//  11 
// >12 changeAB(20);
//  13 
//  14 console.log(a);
// debug> watc
// watch     watchers  

// debug> watchers
//   0: a = 10
// debug> 
// debug> 
// debug> ls
// repl:1