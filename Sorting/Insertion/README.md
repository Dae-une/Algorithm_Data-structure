# 삽입 정렬
이 정렬은 배열의 리스트를 점차적으로 만들어 정렬을 구축하며
리스트는 항상 정렬되어 있습니다.
따라서 하나씩 이동하거나, 한 번에 가장 큰 요소를 찾거나 가장 작은 요소를 찾는 대신
각 요소를 취하여 정렬되어 있는 리스트 속 해당되는 위치에 배치합니다.


```
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```
최악의 경우 빅오는 O(n^2)가 나옵니다.
하지만 거의 정렬이 되어있는 경우,  굉장히 유리하게 작동합니다.
