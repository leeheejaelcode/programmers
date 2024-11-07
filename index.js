const answer = document.getElementById("answer");

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

answer.innerText = solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);

/* -------------------------------------------------------------------------- */
/*                                수열과 구간 쿼리 2                           */
/* -------------------------------------------------------------------------- */

// 1번 방식

// function solution(arr, queries) {
//   return queries.map(([s, e, k]) => {
//     let min = -1;
//     for (let j = s; j <= e; j++) {
//       if (arr[j] > k && (min === -1 || arr[j] < min)) {
//         min = arr[j];
//       }
//     }
//     return min;
//   });
// }

// 설명

// queries.map(([s, e, k]) => {...}):

// queries 배열을 map() 메서드로 순회하면서 각 쿼리 ([s, e, k])를 처리합니다.
// 각 쿼리는 s(시작 인덱스), e(끝 인덱스), k(기준 값)을 포함하는 배열입니다.
// map()을 사용하여 각 쿼리의 결과를 새로운 배열로 반환합니다.

// let min = -1;:
// min은 k보다 큰 가장 작은 값을 저장할 변수입니다.
// 처음에는 min을 -1로 설정합니다. 이는 k보다 큰 수가 없다면 -1을 반환할 것이기 때문입니다.

// for (let j = s; j <= e; j++) {...}:
// s부터 e까지 반복하면서 arr 배열의 해당 구간에 있는 요소들을 확인합니다.

// if (arr[j] > k && (min === -1 || arr[j] < min)):
// arr[j] > k: 현재 arr[j]가 k보다 큰지 확인합니다.
// (min === -1 || arr[j] < min): min이 -1이면 아직 유효한 min값이 없다는 뜻이므로, 그때는 arr[j]를 min으로 설정합니다. arr[j]가 min보다 작으면 min을 갱신합니다.

// min = arr[j];:
// 위 조건을 만족하는 경우, arr[j]를 새로운 최소값으로 설정합니다.

// return min;:
// min을 반환합니다. 만약 k보다 큰 값이 하나도 없으면, min은 -1로 남아 있고, 그 값이 반환됩니다.

// 2번 방식

// function solution(arr, queries) {
//   return queries.map(
//     ([s, e, k]) =>
//       arr
//         .slice(s, e + 1)
//         .filter((n) => n > k)
//         .sort((a, b) => a - b)[0] || -1
//   );
// }

// 설명

// queries.map(...)을 사용하여 각 query에 대해 처리하고, 결과 배열을 만듭니다.

// 각 query는 [s, e, k] 형식으로 주어지며, s는 시작 인덱스, e는 끝 인덱스, k는 기준 값입니다.

// arr.slice(s, e + 1) 부분은 배열 arr에서 s부터 e까지의 인덱스를 잘라 새로운 배열을 만듭니다. 이로써 query에서 지정한 범위의 숫자들만 따로 추출하게 됩니다.

// filter((n) => n > k)는 위에서 잘라낸 배열에서 k보다 큰 수만 남기도록 필터링합니다. 이 단계 이후의 배열에는 k보다 큰 수들만 남게 됩니다.

// sort((a, b) => a - b)는 오름차순으로 배열을 정렬하여, k보다 큰 수들 중 가장 작은 수가 배열의 첫 번째 요소가 되도록 합니다.

// [0] || -1 부분은 k보다 큰 수들 중 가장 작은 수를 반환하는 역할을 합니다.

// 만약 k보다 큰 수가 하나라도 존재한다면 [0]이 가장 작은 수가 되고 이를 반환합니다.
// 만약 k보다 큰 수가 없다면 filter 결과가 빈 배열이 되고, []에서 [0]을 시도하면 undefined가 반환되므로 || -1이 실행되어 -1을 반환하게 됩니다.
