const answer = document.getElementById("answer");

function solution(a, b, c, d) {
  const arr = [a, b, c, d];

  // 배열 정렬
  arr.sort((a, b) => a - b);

  // 모두 같을 때
  if (arr[0] === arr[3]) {
    return a * 1111;
  }

  // 모두 다를 때
  if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3]) {
    return arr[0];
  }

  // 세 숫자가 같고 하나만 다른 경우
  if (
    (arr[0] === arr[2] && arr[2] !== arr[3]) ||
    (arr[1] === arr[3] && arr[0] !== arr[1])
  ) {
    const uniqueNum = arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));

    const num = arr.find((n) => arr.indexOf(n) !== arr.lastIndexOf(n));
    return (10 * num + uniqueNum) ** 2;
  }

  // 두 쌍이 같은 경우 (예: [6, 6, 3, 3])
  if (arr[0] === arr[1] && arr[2] === arr[3]) {
    return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
  }

  // 같은 숫자 2개와 다른 숫자 2개 (두 숫자가 각각 짝을 이루지 않는 경우)
  if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[3]) {
    const uniqueNums = arr.filter((n) => arr.indexOf(n) === arr.lastIndexOf(n));
    return uniqueNums[0] * uniqueNums[1];
  }
}

// answer.innerText = solution(2, 2, 2, 2); // 2222
// answer.innerText = solution(4, 4, 1, 4); // 1681
// answer.innerText = solution(6, 3, 3, 6); // 27
// answer.innerText = solution(2, 5, 2, 6); // 30
// answer.innerText = solution(6, 4, 2, 5); // 2

/* -------------------------------------------------------------------------- */
/*                                주사위게임3                             */
/* -------------------------------------------------------------------------- */

// 문제1
// function solution(a, b, c, d) {
//   const arr = [a, b, c, d];

//   // 배열 정렬
//   arr.sort((a, b) => a - b);

//   // 모두 같을 때
//   if (arr[0] === arr[3]) {
//     return a * 1111;
//   }

//   // 모두 다를 때
//   if (arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3]) {
//     return arr[0];
//   }

//   // 세 숫자가 같고 하나만 다른 경우
//   if (
//     (arr[0] === arr[2] && arr[2] !== arr[3]) ||
//     (arr[1] === arr[3] && arr[0] !== arr[1])
//   ) {
//     const uniqueNum = arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));

//     const num = arr.find((n) => arr.indexOf(n) !== arr.lastIndexOf(n));
//     return (10 * num + uniqueNum) ** 2;
//   }

//   // 두 쌍이 같은 경우 (예: [6, 6, 3, 3])
//   if (arr[0] === arr[1] && arr[2] === arr[3]) {
//     return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
//   }

//   // 같은 숫자 2개와 다른 숫자 2개 (두 숫자가 각각 짝을 이루지 않는 경우)
//   if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[3]) {
//     const uniqueNums = arr.filter((n) => arr.indexOf(n) === arr.lastIndexOf(n));
//     return uniqueNums[0] * uniqueNums[1];
//   }
// }

// 설명
// 배열 정렬: 주어진 네 개의 값을 배열에 담고 오름차순으로 정렬합니다.
// 모두 같을 때: 모든 값이 같으면 그 값에 1111을 곱해 반환합니다.
// 모두 다를 때: 값이 모두 다르면 가장 작은 값을 반환합니다.
// 세 개가 같고 하나만 다른 경우: 세 개의 값이 같고 나머지 하나가 다르면, 유일한 값을 찾고 그 값과 다른 값을 결합하여 제곱한 값을 반환합니다.
// 두 쌍이 같은 경우: 두 숫자씩 짝을 이루면 두 짝을 더한 후 차이를 곱해 반환합니다.
// 두 숫자만 같은 경우: 두 숫자가 두 번씩 나오는 경우가 아니면, 두 개의 유일한 숫자를 곱해 반환합니다.

// 문제2

// function solution(a, b, c, d) {
//   if (a === b && a === c && a === d) return 1111 * a

//   if (a === b && a === c) return (10 * a + d) ** 2
//   if (a === b && a === d) return (10 * a + c) ** 2
//   if (a === c && a === d) return (10 * a + b) ** 2
//   if (b === c && b === d) return (10 * b + a) ** 2

//   if (a === b && c === d) return (a + c) * Math.abs(a - c)
//   if (a === c && b === d) return (a + b) * Math.abs(a - b)
//   if (a === d && b === c) return (a + b) * Math.abs(a - b)

//   if (a === b) return c * d
//   if (a === c) return b * d
//   if (a === d) return b * c
//   if (b === c) return a * d
//   if (b === d) return a * c
//   if (c === d) return a * b

//   return Math.min(a, b, c, d)
// }

// 설명
// 모두 같을 때: 1111을 곱한 값을 반환.
// 세 개가 같고 하나 다를 때: 10배 후 제곱해서 반환.
// 두 숫자씩 같을 때: 두 숫자를 더하고 차이를 곱한 값을 반환.
// 두 숫자가 같고 나머지 다른 경우: 남은 숫자 두 개를 곱한 값을 반환.
// 그 외 모든 경우: 가장 작은 숫자를 반환.

// 조건이 조금 복잡해지면 어려워한다..
// 어떻게보면 노가다지만 성능적으로 가장 최적화된 코드도 있다는걸 생각해야겠다
