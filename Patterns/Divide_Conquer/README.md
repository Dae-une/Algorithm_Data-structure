# 분할 정복

이 알고리즘은 주로 배열이나 문자열 같은 큰 규모의 데이터셋을 처리합니다.
연결리스트나 트리가 될 수도 있습니다.

값을 찾기 위해 배열의 왼쪽에서 시작하여 오른쪽 끝까지 이동하는 것보다는
배열을 작은 조각으로 세분하여 각 조각들을 어디로 이동시킬지 결정하는 작업을 합니다.
즉, 큰 데이터 덩어리를 작은 조각으로 나누는 것이지요.
문제에 따라 큰 도움이 될 수도 있지만 항상 그렇지는 않습니다.

또한, 이 방식은 배열이 항상 정렬되어 있어야 합니다.

## 선형 탐색
선형 검색은 앞에서부터 하나하나씩 검색하는 방식입니다.
 이러한 이유로 선형 검색이라 불리며, 선형 검색의 Big O는 Best는 한번에 찾는 경우의 O(1),
Worst는 가장 마지막에 찾게 되는 O(n)입니다
```
search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) //-1
```
2번째 인자가 있는 index를 반환하는 함수입니다.


```
function search(arr,val){
  for(let i =0; i <arr.length;i++>){
    if(arr[i]===val){
      return i;
    }
  }
  return -1
}
```

## 이진 탐색
이진 탐색은  선형 탐색보다 효율적으로 값을 찾을 수 있습니다.
먼저 배열 내의 중간값을 구합니다.
그리고 이 배열의 중간값과 검색하는 값을 비교합니다. 
```
search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) //-1

```
두 값을 비교하였을 때, 중간값이 찾으려는 값보다 크다면 중간값을 포함한 뒤의 모든 값을 제외합니다.
그리고 반대로 중간값이 찾으려는 값보다 작으면, 중간값을 포함한 앞의 모든 값을 제외하면 됩니다. 
이러한 방식으로 이진 검색은 진행이 됩니다.

```
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

```