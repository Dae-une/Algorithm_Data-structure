# 재귀
재귀는 자기 자신을 호출하는 절차입니다.
한 가지 문제를 가지고, 어떤 엔드 포인트에 도달할 때 까지
더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는것 입니다.
그 종료점을 종료 조건(base case)이라고 하구요.


## 재귀 함수 작성의 두가지 핵심 요소
1. 종료 조건
2. 다른 입력 값

```
const input = 3;

const countDown = input => {
  let num = input;
  if (num <= 0) { // 종료조건
    console.log('모두 출력했습니다.');
    return;
  }
  console.log(num);
  num--; // -> 다른 입력값
  countDown(num);                            
};											
countDown(input);
```
만약 종료 조건이 없다면 함수는 무한 반복이 되어 스택 오버플로우 현상이 일어날 것이다.


## 재귀 도우미 메서드
도우미 메서드에는 두개의 함수가 있는데 재귀 함수를 감싸고 있는 함수와 재귀 함수가 있다.

```
const collectOdds = arr => { // 외부함수
  let result = [];

  const helper = helperInput => { // 재귀함수
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  
  helper(arr);
  
  return result;
};
```

## 순수 재귀
```
const collectOddValues = arr => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
};

```