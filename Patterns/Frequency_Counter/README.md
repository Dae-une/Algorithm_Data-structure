# Frequency Counter
Frequency Counter 는 말 그대로 빈도를 카운터 하는 것이다.

이 패턴은 객체 또는 Set을 사용하여 값 / 값의 빈도를 수집한다.
배열/문자열을 이용한 중첩 루프, O(N^2) 작업을 피할 수 있다.

```
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```
Same은 두 개의 배열을 인수로 받는 함수이다. 첫번째 배열의 모든 value의 제곱수가 두번째 배열과 일치하면 true를 반환한다. value의 빈도수도 일치해야한다.

보통 이 문제를 해결하라 하면
```
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // nested loops
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```
이런 방식으로 풀것이다.
물론 틀린것은 아니다 하지만, 위의 해결법은 Big O가 O(n²)이다.
그렇게 효율적인 코드가 아닌것이다.


```
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (key ** 2 in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```
위의 코드는  Big O가 O(n)이다.
확실히 더 효율적인 코드가 되었다.
