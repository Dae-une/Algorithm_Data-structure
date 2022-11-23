# 스택

스택은 후입선출 원칙을 따릅니다.

스택의 빅오는 삽입, 삭제 는 O(1)을 가지며
검색, 접근 은 O(n)을 가진다.
하지만 사실 검색과 접근의 효율성을 높이려면 스택을 사용하지 않을 것이다.

스택 코드는 단일 연결 리스트를 바탕으로 하여 만들었으며
pop과 push가 아닌 shift와 unshift를 이용하여 만든 이유는
pop과 push의 경우 뒤에서 추가,제거를 하기 때문에 빅오가 O(n)이 나오는데
굳이 그럴필요 없이 앞에서 하면 O(1)이 나온다.

어차피 후입 선출이기 때문에 한 방향에서 진행하기 때문에 가능한 일이다.
만약 Array를 기반으로 한다면 pop과 push가 좋을 것이다.
하지만 만약 방대한 양의 데이터를 사용한다면 Stack.js에 있는 코드가 더 괜찮지 않을까 라고 생각한다.

# 큐

큐는 선입선출 원칙을 따릅니다.

큐 또한 Array를 기반으로 한다면, push와 unshift , shift와 pop으로 이용해 구현이 가능하다.
하지만 이 경우, 추가 및 삭제 에서 순환이 발생하게 된다.
인덱스를 다시 부여하는 파급 효과가 나타나고, 시간 복잡도가 상수가 아니게 된다.

큐 코드 또한 단일 연결 리스트를 바탕으로 만들었으며,
배열의 pop과 shift , push 와 unshift를 이용하여 만들경우,
추가 및 제거에서 인덱스를 재부여 하는 일이 발생하여 시간 복잡도가 O(n)으로 늘어나게된다.

그리고, 데이터를 앞에서 넣고 뒤에서 빼는 경우, 뒤에서 빼기 위해 단일 연결 리스트의 특성상 순회를 하게된다.
이를 방지하여, 데이터를 뒤에서 넣고 앞에서 빼는 형식으로 만들었다.

작은 양의 데이터를 가지고 있다면 크게 문제가 되지 않겠지만
만약 많은 양의 데이터를 가진다면 차이가 클 것이다.