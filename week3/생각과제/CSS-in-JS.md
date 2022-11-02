# Styled-components 와 스타일링 라이브러리

## 0. CSS in JS

---

**CSS in JS** 란 스타일의 정의를 CSS 파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법입니다.

기존에 웹사이트를 개발할 때는 HTML, CSS, JS 를 분리하여 개발해왔으나, React, Vue, Angular와 같은 모던 자바스크립트 라이브러리가 인기를 끌면서 웹 애플리케이션을 여러개의 재활용이 가능한 컴포넌트로 개발하는 방법이 주류가 되고 있기 때문에 CSS in JS 라이브러리를 사용하여 CSS를 JS 에 삽입하고 있습니다.

<br/><br/>

## 1. 해당하는 라이브러리의 장단점은 무엇인가?

---

- 장점

  - CSS 를 컴포넌트레벨로 추상화하는 모듈성
  - 자바스크립트와 CSS 사이의 상수와 함수를 공유(상태변화에 따른 스타일 변호 컨트롤 가능)
  - 현재 사용중인 스타일만 DOM에 포함
  - HTML요소 혹은 React 컴포넌트가 className 을 가진 것처럼 구성 할 수 있어 간결한 코드 작성이 가능

- 단점
  - CSS 를 주기 위해서는 태그를 컴포넌트로 만들어야 하기 떄문에 가독성이 떨어질 수 있음
  - 스타일을 수정 할 때 마다 해당하는 컴포넌트를 찾아야 하는 번거로움
  - CSS in CSS 대비 느린 속도
  - 라이브러리 설치에 따른 번들 크기 증대

<br/><br/>

## 2. 대체할 수 있는 라이브러리가 있는가?

---

> styled-component와 주로 비교되는 라이브러리는 **emotion** 이 있다. emotion 은 styled 컴포넌트와 전반적인 스타일 기능은 동일하고, 둘 다 sass 문법을 사용하기 떄문에 스타일 문법에도 큰 차이가 없다.

emotion 만의 차별점이 있다면 다음과 같다.

### css props 기능

기존 style 속성은 HTML 인라인 스타일로 주입이 된다.  
하지만 emotion 에서 제공해주는 css 속성을 활용하면 이를 클래스로 변환 할 수 있다.

```Js
<div css = {{color: "red"}} />

// 혹은

<div css = {css`color: red`}/>
```

이를 결합하여 복잡한 스타일링도 진행이 가능하다.

```Js
<div css={[style, themes[theme], sizes[size]]} />

const themes = {
  primary: css`
    color: red;
  `,
  secondary: css`
    color: blue;
  `
}
const sizes = {
  small: css`
    fontSize: 0.75rem;
  `,
  medium: css`
    fontSize: 1rem;
  `
}
```

<br/>

### SSR

또한 SSR 에서 ServerStyleSheet 를 설정해야하는 styeld-component와 달리 별도의 설정 없이 SSR 에서 동작이 된다.

<br/>

- styeld-component 에 비해 번들 사이즈가 작다고 하나 유의미한 차이는 아니라고 한다.
- 다양한 자료는 참고했을 때 emotion 이 근소하게 속도가 더 빠르다고 하나, **2020 styled-component v5** 에서는 styled-component 가 더 빠르다고 하는 것을 보니 버전에 따라 엎치락 뒤치락 하는 것 같다!

<br/><br/>

---

CSS in JS 의 동작 방식은 크게 **runtime** 과 **zero-runtime** 으로 나누어진다. 앞서 설명한 styled-component 와 emotion 은 대표적인 **runtime CSS in JS** 인데, 이런 runtime 라이브러리들은
스타일을 생성하는 방식은 문제가 없지만, 스타일 계산 비용이 커지기 떄문에 스타일이 복잡한 컴포넌트에서는 _Runtime overhead_ 가 발생하기 때문에 이를 해결하기 위해 **linaria** 와 같은 라이브러리가 등장하기도 하였다.  
최근에는 **near-zero runtime** 을 표방하는 라이브러리들이 등장하는데, 그 중 하나인 **sitches.js** 에 대해 알아보자

---

stitches.js 는 styled-component와 유사한 api 를 가진 CSS in JS 라이브러리이다.  
차이점이라고 한다면 styeld-component 에서는 props에 의한 완전한 동적 스타일링이 가능하지만, stitches는 사전에 정의한 variants에 의한 스타일링만 가능하다.

```JS
/* styled-components */
const Input = styled.input`
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
() => <Input size="100px" />

/* stitches */
const Button = styled('button', {

  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
      },
      gray: {
        backgroundColor: 'gainsboro',
      },
    },
  },
});
// color="#9542f5" 불가능
() => <Button color="violet">Button</Button>;
```

## 3. 어떤 스타일링 라이브러리가 가장 마음에 드는가?

- 사실 styled-component 가 가장 보편적으로 사용되는 것은 이유가 있다고 생각한다. 계속되는 버전업으로 emotion 보다 느리다고 인식되던 속도 또한 개선되는 모습을 보이고 있는 것 같기도 하다.  
  다만 **runtime** 과 **zero-runtime**, **near-zero runtime** 등등의 방식 뿐 만 아니라 본문에 소개하진 않았지만 최근에 **tailwind** 와 같은 **Atomic CSS** 방식도 주목받고 있는 것을 보니 어떤라이브러리를 사용해야 하는가는 정답이 없다고 생각한다.  
  프로젝트의 규모에 따라 runtime이, 프로젝트의 사이즈가 커진다면 zero-runtime 이나 그 중간 타협점을 찾은 near-zero runtime 을 사용하면 좋겠지만 그렇다면 자유도가 떨어진다는 단점이 있다.  
  계속해서 기술이 발전을 하고 개발자들이 새로운 방법을 찾고 있는 것을 보니 내가 만드는 서비스가 무엇인지 나의 서비스를 먼저 스스로 분석하는것이 먼저이며, 그에 따라 적절하게 기술들을 사용해야 함을 느꼈다.
