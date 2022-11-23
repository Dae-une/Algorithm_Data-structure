# 선택 정렬
버블 정렬과 비슷하지만, 큰 값을 배열 끝에 위치시키는 대신
작은 값을 한 번에 하나씩 위치에 배치시킵니다.
마찬가지로 처음부터 끝까지 움직이지만, 실제 정렬된 데이터는 처음부터 누적됩니다.

가장 작은 값을 찾아서 그 값을 배열의 맨 앞에 위치한 값과 교체합니다.

```

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}
```
선택 정렬은 엄청나게 효율적이지는 않습니다.
시간 복잡도는 O(n^2) 입니다.
만약 swap 수를 최소화 하고 싶다면 선택 정렬은 좋은 선택이 될 것입니다.
