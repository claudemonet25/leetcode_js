//2621.sleep

//양의 정수가 주어 지면 밀리초 millis동안 휴면하는 비동기 함수를
// 작성합니다 millis . 어떤 값이라도 해결할 수 있습니다.

//뭐라는건지 모르겠다. 해석ㄱㄱㄱㄱ

/**
 * 주어진 밀리초 동안 대기하는 비동기 함수입니다.
 * @param {number} millis - 대기할 시간(밀리초)
 * @return {Promise} - 대기가 완료된 후에 해결(resolve)되는 Promise 객체
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

const t = Date.now(); // 현재 시간 기록
sleep(5000).then(() => console.log(Date.now() - t));
