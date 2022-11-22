# 다중 포인터
이 패턴의 개념은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라
중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것 입니다.
 
 배열이나 문자열과 같은 일종의 선형 구조나 이중 연결 리스트 등 과 같이
 한 쌍의 값이나 조건을 충족시키는 무언가를 찾는다는 개념 입니다.

 ````
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-5, -2, -1, 0, 1, 3, 4]); // [-1, 1]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
````
sumZero는 배열을 인수로 받아 두 수의 합이 0인 배열의 값을 찾아내는 알고리즘 문제입니다.

위 문제의 첫번째 해결 법으로는
```
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```
위와 같이 풀수 있겟죠.
하지만 이 방법은 Big O가 O(n²)입니다.
조금 더 효율적으로 코드를 만들어볼까요?

```
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] + arr[right] < 0) {
      left++;
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      return [arr[left], arr[right]];
    }
  }
}
```
multiple pointers를 활용한 풀이 방법입니다. 
말그대로 포인터가 여러 개가 있다는 뜻이 됩니다.위의 예시를 보면, 배열의 숫자들을 가리키는 포인터가 left, right 두 개가 있습니다.

반복문은 left가 right보다 작을 때까지를 반복하게 되며, 두 수의 합을 비교합니다.
두 수의 합이 0이면 배열을 반환하게 되고, 0보다 크면 right 값을 줄여나가고 작으면 left 값을 늘리는 방식으로 진행됩니다.
위코드는 시간 복잡도는 O(N), 그리고 공간 복잡도는 O(1) 입니다.
