# javascript-calculator-precourse

# 구현할 기능 목록

## 사용자 입력

- [x] 애플리케이션 실행 시 "덧셈할 문자열을 입력해 주세요."를 출력하고, 문자열을 입력받는다.

## 문자열 분리

- [x] 커스텀 구분자 설정 부분의 유무를 확인한다. (문자열 앞부분의 "//"와 "\n")
- [x] 커스텀 구분자 설정 부분이 없다면 기본 구분자를 기준으로 분리한다.
- [x] 커스텀 구분자 설정 부분이 있다면 커스텀 구분자와 기본 구분자를 모두 고려하여 분리한다.

### 커스텀 구분자 설정 부분이 없어서 기본 구분자(쉼표, 콜론)를 기준으로 분리하는 경우

- [x] 입력 문자열을 쉼표 또는 콜론을 기준으로 분리한다.
- [x] 분리된 문자열이 숫자가 아닐 경우, "[ERROR] 숫자가 아닌 값을 입력할 수 없습니다."를 출력하고 애플리케이션이 종료된다.

### 커스텀 구분자 설정 부분이 있어서 커스텀 구분자를 기준으로 분리하는 경우

- [x] 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 추출하여 구분자로 추가한다.
- [x] 입력 문자열을 쉼표 또는 콜론 또는 커스텀 구분자를 기준으로 분리한다.
- [x] 분리된 문자열이 숫자가 아닐 경우, "[ERROR] 숫자가 아닌 값을 입력할 수 없습니다."를 출력하고 애플리케이션이 종료된다.
- [ ] 커스텀 구분자 설정 부분이 문자열 앞에 위치하지 않는 경우, "[ERROR] 커스텀 구분자 설정은 문자열 앞에 위치해야합니다."를 출력하고 애플리케이션이 종료된다. (TBD: 추후에 결정)

## 덧셈 연산

- [ ] 추출된 숫자들을 받아와 덧셈 연산을 한다.

## 결과 출력

- [ ] "결과 : "와 덧셈 연산의 결과를 출력하고, 애플리케이션을 종료한다.
