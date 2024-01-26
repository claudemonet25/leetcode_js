//2619. Array Prototype Last
//문제
//모든 배열에서 메서드를 호출
//array.last() 있고 마지막 요소를 반환할 수 있도록 모든 배열을
//'향상시키는 코드를 작성하세요. 배열에 요소가 없으면 -1 를 반환해야 합니다.

//배열 프로토 타입에 last 메서드 추가하기

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1]; //마지막 요소 계산법
  }
};

// 배열에 요소 없으면 -1 반환하기

const arr = [];
const lastElement = arr.last();
console.log(lastElement);

// 마지막 요소 반환하기

//const arr = [3, 4, 5];
//const lastElement = arr.last();
//console.log(lastElement);
