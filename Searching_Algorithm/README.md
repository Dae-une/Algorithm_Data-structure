# 검색 알고리즘

## 선형 검색
첫 부분에서 시작해서 끝 부분으로 이동하면서 한 번에 하나의 항목을 확인할 수도있고,
끝 부분에서 시작해 첫 부분으로 이동할 수도 있습니다.
하지만 중요한건,
세트 간격으로 이동하면서 한 번에 하나의 항목을 확인하는 식으로 모든 항목을 확인한다는것 입니다.
배열의 길이가 길어지면 그만큼 오래 걸리겠죠

이 방식이 선형 탐색 입니다.
자바스크립트의 includes,indexOf,find 등등이 이 방식을 사용하죠.
```
function linearSearch(arr,num){
  for(let i =0; i <arr.length;i++){
      if(arr[i]===num) return i
  }
  return -1
}
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
```
보시다시피 O(n)의 빅오를 가집니다.

## 이진 검색
이진 탐색은  선형 탐색보다 효율적으로 값을 찾을 수 있습니다.
하지만 , 배열이 정렬되어 있어야한다는 조건이 있습니다.
먼저 배열 내의 중간값을 구합니다.
그리고 이 배열의 중간값과 검색하는 값을 비교합니다. 

두 값을 비교하였을 때, 중간값이 찾으려는 값보다 크다면 중간값을 포함한 뒤의 모든 값을 제외합니다.
그리고 반대로 중간값이 찾으려는 값보다 작으면, 중간값을 포함한 앞의 모든 값을 제외하면 됩니다. 
이러한 방식으로 이진 검색은 진행이 됩니다.

```
function binarySearch(arr,num){
  let start =0;
  let end = arr.length-1
  
  while(min <=max){
      let middle = Math.floor((start+end) /2)
      
      if(arr[middle] >num){
          end= middle - 1;
      }else if(arr[middle] <num){
          start = middle +1;
          
      }else{
          return middle
      }
  }
  return -1

```
위 코드의 빅오는 O(log n)입니다.
훨씬 더 효율적인 코드가 됬네요
