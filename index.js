const answer = document.getElementById("answer");

// 문자열을 변환
function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

answer.innerText = solution("He11oWor1d", "lloWorl", 2);

/* -------------------------------------------------------------------------- */
/*                                문자열 겹쳐쓰기                           */
/* -------------------------------------------------------------------------- */

// 설명

// my_string.slice(0, s):
// my_string의 시작부터 s 바로 앞까지(0번 인덱스부터 s-1까지)의 문자열을 추출합니다.
// 이 부분이 새 문자열의 맨 앞부분이 됩니다.

// overwrite_string:
// 덮어쓰려는 문자열 overwrite_string을 중간에 그대로 추가합니다.

// my_string.slice(s + overwrite_string.length):
// my_string의 s + 덮어쓴 문자열 길이부터 끝까지를 잘라냅니다.
// 덮어쓰기가 끝난 바로 다음 부분부터 남은 문자열을 잘라내어 뒤에 붙입니다.

// 간단한 문제이지만 원복을 변환시키는지 원본에서 남은 값을 가져오는지에 대한 이해도가 필요한 문제같다!
