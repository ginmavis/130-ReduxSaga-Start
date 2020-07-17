// console.log("learning generator function");

// function* helloGeneratorFunction() {
//   // câu lênh 1
//   yield 2019; // break
//   // câu lênh 2

//   //   yield "hello";
//   return "tự học lạp trình redux-saga";

//   yield "hello";
// }
// //result là 1 iterators (1 chuỗi giá trị)
// const result = helloGeneratorFunction();

// console.log("result 1 :", result.next()); // 2019 -done:false
// console.log("result 2 :", result.next());
// console.log("result 3 :", result.next());

// // nếu dùng return sẽ dừng hẳn
// // khi dùng result.next() nó sẽ chạy tiếp

// console.log("result 1 :", helloGeneratorFunction().next());
// console.log("result 2 :", helloGeneratorFunction().next());

// console.log("vong lap vo tan");
// function* helloGeneratorFunction() {
//   while (true) {
//     yield "Tôi đng lắng nghe...";
//   }
// }

// const iterator = helloGeneratorFunction();
// console.log("result 1 :", iterator.next());
// console.log("result 2 :", iterator.next());
// console.log("result 3 :", iterator.next());

console.log("generator function : generator trong generator");

function* printName() {
  yield "redux-saga";
}
function* hello() {
  yield "xin chào";
  //   const nameIterator = printName();
  //   yield nameIterator.next();
  yield* printName();

  yield ". Kết thúc  .";
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
