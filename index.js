const answer = document.getElementById("answer");

function solution(my_string, queries) {
  let str = [...my_string];
  queries.forEach(([start, end]) => {
    let change = str.slice(start, end + 1);
    str.splice(start, change.length, ...change.reverse());
  });
  return str.join("");
}

answer.innerText = solution("rermgorpsam", [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);

/* -------------------------------------------------------------------------- */
/*                                문자열 여러 번 뒤집기                                */
/* -------------------------------------------------------------------------- */

// 1번 방식

// function solution(my_string, queries) {
//   let str = [...my_string];
//   queries.forEach(([start, end]) => {
//     let change = str.slice(start, end + 1);
//     str.splice(start, change.length, ...change.reverse());
//   });
//   return str.join("");
// }

// 2번 방식

// function solution(my_string, queries) {
//   let str = my_string;
//   queries.forEach(([start, end]) => {
//     let change = str.slice(start, end + 1);
//     str = str.replace(change, change.split("").reverse().join(""));
//   });
//   return str;
// }

// 두 방식의 차이점

// 첫 번째 코드 (배열 방식)

// my_string을 문자 배열로 변환 후 각 쿼리 구간을 잘라 뒤집어 배열에 직접 삽입합니다.
// 배열을 사용하므로 특정 구간을 안정적으로 수정할 수 있습니다. 여러 구간을 처리해도 의도대로 작동함.

// 두 번째 코드 (문자열 방식)

// slice로 특정 구간을 추출하고 뒤집어 replace로 변경합니다.
// 문제점: replace는 첫 번째로 발견된 일치 구간만 바꾸므로, 동일한 부분 문자열이 중복될 경우 다른 위치가 의도와 다르게 변경될 수 있음.
