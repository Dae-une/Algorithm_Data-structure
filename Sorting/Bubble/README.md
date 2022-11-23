# 버블 정렬
버블 정렬은 사실 그렇게 효율적이지도, 자주 사용되지도 않는다.
하지만 다른 알고리즘이 왜 더 효율적인지 알게 해줄 것입니다.

버블 정렬의 개념은 배열을 가장 작은 숫자에서 가장 큰 숫자순으로,
오름차순으로 정렬을 핟다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동을 한다는 것입니다.

버블 정렬의 작동 방식은 루프를 돌면서 각 항목을 다음 항목과 비교하는 것입니다.
그리고 이 숫자가 비교 대상보다 큰지 확인 합니다.
더 클 경우, 자리를 교환합니다.

```

function bubbleSorting(arr) {
  for (let i = arr.length; i >0; i--) {
    for (let j = 0; j < i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

  return arr;
}
```
만약 데이터가 거의 정렬된 상태라면 버블 정렬은 굉장히 비효율적일 것이다.
이미 어느정도 정렬이 되어있는데, 버블 정렬은 그럼에도 모든 항목을 다 비교하게 된다.

그래서 위 코드를 조금 더 최적화 하자면
```

function bubbleSorting(arr) {
  let noSwaps;
  for (let i = arr.length; i >0; i--) {
    noSwaps = true;
    for (let j = 0; j < i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps=false;
      }
    }
   if(noSwaps) break;
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

  return arr;
}

```
자리 변동이 없는 항목은 비교를 하지 않고 넘어가버린다.

버블 정렬의 빅오는 O(n^2) 이다.
 