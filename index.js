const answer = document.getElementById("answer");

function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((s, i) => [s, i])
    .filter((_, i) => attendance[i])
    .sort((a, b) => a[0] - b[0]);

  let result = a[1] * 10000 + b[1] * 100 + c[1];

  return result;
}

answer.innerText = solution(
  [3, 7, 2, 5, 4, 6, 1],
  [false, true, true, true, true, false, false]
);

// answer.innerText = solution([1, 2, 3], [true, true, true]);

// answer.innerText = solution(
//   [6, 1, 5, 2, 3, 4],
//   [true, false, true, false, false, true]
// );

/* -------------------------------------------------------------------------- */
/*                                전국 대회 선발 고사                            */
/* -------------------------------------------------------------------------- */

// 설명

// map으로 인덱스와 값 묶기:
// rank.map((s, i) => [s, i])를 사용해 rank의 각 요소 s와 인덱스 i를 [s, i] 형태의 배열로 변환하여 묶습니다.
// 이렇게 하면, 인덱스와 함께 rank 요소가 포함된 배열을 만들 수 있습니다.

// filter로 attendance 조건에 따라 필터링:
// .filter((_, i) => attendance[i])를 사용하여 attendance 배열에서 true인 인덱스에 해당하는 [s, i] 쌍만 남깁니다.

// 이 과정에서 attendance[i]가 true인 [rank 요소, 인덱스] 형태의 배열이 반환됩니다.
// 정렬:
// .sort((a, b) => a[0] - b[0])을 통해 필터링된 배열을 rank의 값(s) 기준으로 오름차순 정렬합니다.
// 이로 인해 rank 값이 작은 순서대로 [s, i]가 배열의 앞쪽에 위치하게 됩니다.

// 필요한 요소 추출:
// const [a, b, c] = ...로 상위 세 개의 [s, i] 쌍을 추출합니다.

// 결과 계산:
// a[1] * 10000 + b[1] * 100 + c[1]에서 각 인덱스 값을 사용해 주어진 계산식을 완성합니다.

// 조건에 대한 이해가 필요했지만 내 힘으로 풀 수 있었다..
// 배열의 구조분해 할당을 생각을 못했지만 이렇게 접근이 가능한다는걸 알게됐다..
