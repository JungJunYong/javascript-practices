/* null 과 undefined */
var myVar1;
var myVar2 = null;

console.log(myVar1 +":"+ myVar2)
console.log(typeof(myVar1) +":"+ typeof(myVar2));

console.log(myVar1 == myVar2); //값비교
console.log(myVar1 === myVar2);  //타입비교

console.log("============================");
// == : equlity, 값의 등치성, 형변환
console.log(1 == "1");
console.log(true == 1);
console.log('abc' == new String('abc'));

console.log( true + 10);
console.log('abc'+ new String('abc'));
console.log(1+"1");

// === : identity, 객체의 동일성, 형변환x
console.log("2"===2);
console.log(true === 1);
console.log('abc' === new String('abc'));
// 추천
// 엄격하게 형변환을 해서 두 피연산의 타입을 맞춰준다.
var str = "5"; 
console.log(parseInt(str) == 5);

