# Sliding Window
배열이나 문자열과 같은 일련의 데이터를 입력하거나
특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용합니다.
 
창문이 옮겨간다는 이 알고리즘 풀이 방식은 범위(창문)가 자동으로 옮겨가면서 조건에 해당하는 답을 반환하게 됩니다.
이 방법 또한 마찬가지로 시간복잡도가 O(n)이며, 자주 활용되는 방식입니다.

 ```
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([2, 3], 3); // null
 ```
maxSubarraySum은 배열과 숫자, 두 개의 인수로 숫자에 해당하는 길이의 subarray의 총합이 가장 큰 배열을 찾아내는 알고리즘 문제입니다.

```
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
```
두 개의 변수를 지정해줍니다.
일시적인 합(tempSum) 그리고 가장 큰 합(maxSum)
마지막엔 두 값을 비교하여 maxSum을 반환하게 됩니다.

두 번째 반복문이 중요한데 여기서 sliding window라는 개념이 등장합니다.
반복문을 통해 범위를 이동시키면서 원래 있던 범위의 뒤에 있는 값을 더하고 맨 앞에 있는 값을 빼는 방식입니다.