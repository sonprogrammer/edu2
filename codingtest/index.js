// console.log('Hello World')

// // 표준 입력에서 데이터를 읽어옴
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

// console.log(input)
// const input = fs.readFileSync('./input.txt').toString().trim()
// // 입력 값을 정수로 변환
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);

// // a - b의 결과를 출력
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(Math.floor(a / b));
// console.log(a % b);

// let a = input[0] //first line
// let b = input[1] //second line

// x1 = b[2]
// x2 = b[1]
// x3 = b[0]

// console.log(Number(a) * Number(x1))
// console.log(Number(a) * Number(x2))
// console.log(Number(a) * Number(x3))
// console.log(Number(a) * Number(b))

// a = Number(input[0])

// if(a >= 90){
//     console.log('A')
// }else if(a >= 80){
//     console.log('B')
// }else if(a >= 70){
//     console.log('C')
// }else if(a >= 60){
//     console.log('D')
// }else{
//     console.log('F')
// }

// console.log(input)

// let hour = Number(input[0].split(' ')[0])
// let minute = Number(input[0].split(' ')[1])

// if(minute < 45){
//     hour -= 1;
//     minute += 15;
//     if(hour < 0) hour = 23;
// }

// else minute -= 45;

// console.log(hour + ' ' + minute)

// let [a, b] = input[0].split(' ').map(Number)
// let c = Number(input[1])

// let totalMinute = a * 60 + b + c

// totalMinute %= 1440;

// let hour = parseInt(totalMinute / 60) 
// let minute = totalMinute % 60

// console.log(hour + ' ' + minute)


// let a = Number(input[0].split(' ')[0])
// let b = Number(input[0].split(' ')[1])
// let c = Number(input[0].split(' ')[2])

// if(a == b && b == c) console.log(10000 + a * 1000)
// else if(a == b) console.log(1000 + a * 100)
// else if(a == c) console.log(1000 + a * 100)
// else if(c == b) console.log(1000 + b * 100)
// else console.log(Math.max(a, b, c) * 100)

// let a = Number(input[0])

// let sum = 0
// for(let i = 0; i < a; i++){
//     sum += i
// }
// console.log(sum)


// let a = Number(input[0])
// for(let i = 1; i <= 9; i++){
//     console.log(a + ' * ' + i + ' = '+ a*i)
// }