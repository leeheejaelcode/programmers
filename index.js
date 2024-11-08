const answer = document.getElementById("answer");

function solution(picture, k) {
  const result = [];

  const arr = picture.map((row) =>
    [...row].map((char) => char.repeat(k)).join("")
  );

  for (let i = 0; i < k; i++) {
    result.push(arr);
  }

  return result;
}

answer.innerText = solution(["x.x", ".x.", "x.x"], 3);

/* -------------------------------------------------------------------------- */
/*                                그림확대                           */
/* -------------------------------------------------------------------------- */

// 1번 방식

// function solution(picture, k) {
//   const result = [];
//   const arr = picture.map((row) =>
//     [...row].map((char) => char.repeat(k)).join("")
//   );

//   for (let i = 0; i < k; i++) {
//     result.push(arr);
//   }

//   return result;
// }

// 설명

// 가로 방향 확장: arr에 각 행의 모든 문자를 k번 반복한 문자열을 추가합니다.
// 세로 방향 확장: for 루프에서 result 배열에 가로 확장된 배열 arr의 각 행을 반복하여 추가합니다.

// 2번 방식

function solution(picture, k) {
  const res = picture.map((row) =>
    [...row].map((char) => char.repeat(k)).join("")
  );

  return res.flatMap((r) => Array(k).fill(r));
}

// 설명

// 가로 방향 확장: row.split("").map((char) => char.repeat(k)).join("")로 각 행의 모든 문자를 k번 반복하고, 다시 하나의 문자열로 합칩니다.
// 세로 방향 확장: Array(k).fill(...)로 각 가로 확장된 행을 k번 복제합니다.
// flatMap 사용: picture.flatMap(...)는 각 행이 가로와 세로로 확장된 배열을 펼쳐서 하나의 2차원 배열로 반환합니다.

// 많이 어렵다..
// 단순히 문자열 반복과 배열의 반복추가인데 생각하지 못한 부분이 너무 많았다
// 메서드들이 익숙하지 않아서 생기는 문제점 같다 ㅜㅜ..
