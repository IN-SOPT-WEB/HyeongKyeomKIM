# 1. 각 라이브러리, 프레임워크의 주된 차이점은 무엇인가?

> 사실 이 각각의 라이브러리, 프레임워크의 차이점을 완전히 총정리 해둔 아티클이나 글이 없어서 비교하기가 쉽지는 않았다.  
> 하지만 각 기술들은 서로를 보고 상호발전하고 있으며, 현재 가장 점유율이 높은 **React**뿐 만 아니라 Web-App 을 만들때 더 수월하게 만들 수 있어 카카오나 네이버 FE 분야에서 거의 리액트와 반반으로 사용되고 있는 **Vue.js**, Typescript 기반으로 작성되며 강력한 보안을 자랑하는 **Angular**, 최근 등장하여 급부상 하고있는 **Svelte** 까지 현재 현황에 맞춰서 비교 해 보고자 한다.  
> 이번 아티클을 작성하면서 아직 React 만을 습득하고 사용하는 학생의 입장에서 왜 React 가 1등을 달리고 있는지, 다른 라이브러리와 프레임워크는 어떤 이점이 있길래 각각의 분야에서 React 를 제치고 사용되고 있는지, 앞으로 FE 분야에서 어떻게

<br/>

## React

---

모두들 알고 있겠지만 현재 프론트엔드 라이브러리 점유율을 지배하고 있는 것은 React 이다.  
React 는 2013년 페이스북에 의해 처음 세상에 선보여졌다.  
라이브러리로 시작했기 때문에 공식 문서도 React 를 라이브러리라고 소개한다.  
현재는 발전을 거듭하면서 프레임워크의 성질 또한 가지고 있는데, 프레임워크의 정형화된 뼈대를 강제하지 않기 때문에 React 는 여전히 라이브러리에 가깝다고 볼 수 있지만, 이것은 견해에 따라 다르므로 오늘날 뚜렷하게 구별은 되지 않는다 정도로 정리하고 넘어 갈 수 있을 듯 하다.

---

<br/>

- React 의 핵심은 재사용 가능한 UI 생성과 Virtual-DOM을 이용한 렌더링이 있다.
- JSX 라는 문법을 사용하는데, 이는 자바스크립트를 확장한 문법으로 React 의 기본 단위가 되는 Component를 생성하는데 사용되는 문법이다.
- JSX 문법의 모습은 HTML 과 JS 를 섞어놓은 듯한 모습을 하고있다.

```Js
// yarn create react-app 실행 후 app.js 코드
function App() { // JSX 문법, HTML 과 JS 가 섞인 듯한 문법이다.
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

<br/><br/>

## Vue.js

---

Vue.js 는 프론트엔드 3대장인 React, Angular, Vue 중 가장 늦게 만들어진 프레임워크이다.  
2014년 출시된 Vue 는 출시는 3대장 중 출시는 가장 늦지만, 점유율로는 React 의 뒤를 바짝 추격하고 있는 2인자이다.
그럼 Vue 는 왜 이렇게 빠르게 2인자의 자리까지 올랐을까?

---

<br/>

1.  쉬워서 쓴다.
    - Angular는 매우 방대하고, Typescript 사용을 강제하기 때문에 학습 난이도가 높다.
    - React는 기존 JS 문법을 많이 활용하기 떄문에 JS에 대한 이해가 기본이 되어야 한다.
    - 반면 Vue 는 Vue 문법을 새로 배우기 때문에 자바스크립트 문법이 익숙하지 않은 사용자도 쉽게 웹앱을 만들어 낼 수 있다는 장점을 가지고 있다.

```Js
// React 의 if(1)
function App() {
  const conditional = () => {
    if (true) {
      return <p>트루입니다.</p>;
    } else {
      <p>트루아닙니다.</p>;
    }
  };

  return <div>{conditional()}</div>;
}

// React 의 if(2)
function App() {
  return <>{true ? <p>트루입니다.</p> : <p>트루아닙니다.</p>}</>;
}
// React 는 JS 문법 그대로 사용


// Vue 의 if (Vue 자체 문법 사용)
<template>
  <div>
    <p v-if="show">트루입니다.</p>
    <p v-else>트루아닙니다.</p>
  </div>
</template>
```

- 위 코드의 경우처럼 Vue 는 코드가 조금 더 깔끔하다고 볼 수 있다.  
  중간중간 자바스크립트이 중괄호 같은 것을 많이 사용하지 않고 HTML 스럽게 볼 수 있어 페이지 구조를 파악하기도 쉽다는 장점이 있으나 이는 개인 성향의 영역이라고 볼 수 있다.

<br/>

2. 코드를 작성하는 방식이 정해져 있다.
   - 코드를 작성하는 방식이 매우 자유로운 React와 달리 Vue 는 코드를 작성하는 방식이 어느정도 정해져 있다.  
     예를 들어 for 반복문을 작성할 때도 React는 map, forEach, for in, for of 등등 많은 반복문을 사용 할 수 있지만 Vue 는 v-for 문법 하나로 해결한다.
   - 자유도가 떨어지는 점은 단점이 될 수도 있으나, 통일된 문법을 사용하기 때문에 코드 컨벤션을 통일하는데도 도움이 되고, 특히 프로젝트의 사이즈가 커질수록 이런 코드의 통일성은 중요하기 때문에 후에 수정과 관리가 편하다는 장점이 있다.

<br/><br/>

## Angular

---

Angular는 2010년에 구글에서 선보인 JS 프레임워크로 프론트엔드 3대장 중에서 가장 오래된 역사를 자랑한다.  
역사가 긴 만큼 Angular 1부터 10까지 존재하는데, 오늘날 사용하는 버전은 Angular2 버전을 기전으로 한다.  
2016년에 드디어 버전업이 되었고 이것이 통상적으로 알고있는 Angular 라고 한다. 이 버전을 기전으로 Angular CLI 를 통한 개발환경 구성 등 개발 방식이 크게 변경되었고, Typescript 를 사용하기 시작하여 생태계를 구축했다.  
Angular 는 구성에 대한 강제가 비교적 엄격하다고 하는데, 이러한 특징으로 대규모 웹 어플리케이션에 적합하다는 평가를 받는다. 엄격하다는 것은 단점이 될 수도 있지만, React와 Vue는 프레임워크 단에서 구성에 강제되는 사항이 없기때문에 사용자가 직접 규약을 설정해야 한다는 문제가 발생한다는 것을 보았을 떄, 이것 또한 프로젝트, 사용자의 호불호에 따라 나뉠 사항이라고 생각한다.

---

<br/><br/>

## Svelte

---

Svelte 는 2019년에 등장하여 빠르게 사용자를 모으고 있는 신예 프레임워크이다.  
2020년 _state of JS_ 설문에 의하면 React를 제치고 가장 많은 이들이 배우고 싶은 프레임워크 1위에 오르기도 했으며  
_Stack Overflow_ 가 2021 년 발표한 웹 프레임워크 부문에서 Svelte는 가장 사랑받는 프레임워크 1위, 가장 원하는 프레임워크 5위에 올랐다고 한다.

---

- Svelte의 공식 사이트에서는 세 가지 특징을 내세우고 있는데

  1. 적은 양의 코드로 작성한다.
  2. Virtual DOM 을 사용하지 않는다.
  3. 진짜 반응성(Reactive) 를 제공한다.

  라는 것이다.

- Svelte는 작성해야 하는 코드를 줄이는 것을 중요시 한다고 하는데, 아래 예시와 같이 두 수의 합을 렌더링 하는 코드를 작성해야 한다고 할 떄, React나 Vue 보다 코드의 양이 확연히 적은 것을 알 수 있다.

```Js
// React로 작성한 코드
import React, {useState} from 'react';

export default function App() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    function handleChangeA(event) {
      setA(+event.target.value);
    }

    function handleChangeB(event) {
      setB(+event.target.value);
    }

    return (
      <div>
        <input type="number" value={a} onChange={handleChangeA}/>
        <input type="number" value={b} onChange={handleChangeB}/>

        <p>{a} + {b} = {a + b}</p>

        </div>
    )
}

// Vue 로 작성한 코드
<template>
  <div>
    <input type="number" v-model.number="a">
    <input type="number" v-model.number="b">

    <p>{{a}} + {{b}} = {{ a + b }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        a: 1,
        b: 2
      };
    }
};
</script>

// Svelte 로 작성한 코드
<script>
  let a = 1;
  let b = 2;
</script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>

<p>{a} + {b} = {a + b}</p>
```

- 위와 같이 적은 양의 코드로 같은 기능을 구현 할 수 있다.
- 또한 Svelte는 Virtual-DOM 을 사용하지 않고도 더욱 빠른 속도를 자랑하는데,  
  이는 Virtual-DOM 프레임워크가 실제 DOM 에 변경사항을 반영하기 전 보이지 않는 트리에서 컴포넌트를 그리기 위한 시간을 소비하는 반면, Svelte 는 이 단계를 건너띄고 바로 변경하기에 더 빠른 퍼포먼스를 기대할 수 있다.
- 또한 다른 프레임워크와 비교했을 떄 번들 크기가 매우 작다는 것도 장점으로 들 수 있겠다.

<br/><br/><br/>

# 2. 스타트업을 창업한다고 할 떄, 무슨 라이브러리/프레임워크를 사용해야 할까?

---

이 문제는 정말 정답이 없다고 생각한다. 프로젝트의 규모, 웹 페이지인지, 웹 앱인지, 개발자들의 수준 등에 따라서 각 라이브러리/프레임워크 간의 장단점이 뚜렷하기 때문에 모든 사항을 고려해서 정해야 한다고 생각한다.  
다만 현재 카카오나 네이버와 같은 국내 대기업이나 해외 기업들도 Vue 의 사용 비중이 높기 때문에 이들과 함께 프로젝트를 함께 하기 위해서는 Vue를 학습하고 사용해야 하는 것이 맞겠다.  
하지만 창업을 한다고 가정했을 떄, 현재로써는 개발자 상태계가 가장 방대하고 기술을 사용하는 사람이 가장 많은 React 를 주로 사용해야 한다고 생각하나 현재 Svelte가 가장 관심받는 프레임워크 인 만큼 이에 대한 관심을 놓지 않고 끊임없이 학습해야 하며, 추후 주류 프레임워크가 바뀌었을 떄, 몸이 가벼운 스타트업이라면 유연하게 바꿀 수 있기 때문에 Svelte 도 적합하다고 생각한다.

---

<br/><br/><br/>

# 난 무엇을 위해 React를 학습하는가?

---

최근 급부상하는 기술, React의 위를 바짝 쫒고있는 프레임워크도 물론 중요하다. 하지만 좋은 개발자가 되기를 희망하고 공부하는 입장에서 React를 배우는 것이 가장 방대한 개발자들의 커뮤니티에 들어가는 가장 좋은 방법이기도 하고, 이런 방대한 커뮤니티를 이용해서 나도 빠르게 기술을 습득하고 이를 토대로 최신 동향까지 파악할 수 있는게 중요하다고 생각한다.  
그를 위해서는 React 학습이 필수적이라고 생각하며, Nextjs 와 같은 React 프레임워크도 최근 13버전을 발표하면서 React에 힘을 실러주고 있으니 더더욱 React를 학습하는 것이 우선적이고 중요하다고 생각한다.  
하지만 지금 이렇게 React 의 동향을 주시하듯 다른 기술들의 동향도 찾아보며 유연하게 대처하는 자세를 가져야 할 것이다.

---
