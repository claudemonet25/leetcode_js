//2620. counter
//문제
//정수가 주어지면  함수를 n반환합니다
//counter. 이 counter함수는 처음에 반환된  n 다음 이후에
//호출될 때마다( n, n + 1, n + 2등) 이전 값보다 1을 더 많이 반환합니다.

// 카운터 함수 만들기
const createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(100);
console.log(counter());
console.log(counter());
