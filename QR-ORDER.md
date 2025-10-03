# qr코드로 메뉴보는 application

## Skill
- Build : vite
- Library : React js
- Language : TypeScript 
- Develop Tool : VS Code 

## CSS 패턴 
- 반응형 AND 적응형
- MediaQuery And BreakDownPoint

## 컴포넌트 렌더링 방식
- SPA
- URL 기반 라우팅 렌더링(React Router Dom)
- 코드 스플리팅(Lazy)

## 컴포넌트 구조와 설계 패턴
- 페이지 컴포넌트(Page Component)
- UI/공통 컴포넌트(UI / Shared Component)
- 레이아웃 컴포넌트(Layout Component)
- 컨테이너 컴포넌트
- 프리젠테이션 컴포넌트
- Route - Map 패턴

## 상태관리
컴포넌트 간에 데이터(상태)를 어떻게 주고받고 유지할지 방법론 
[종류]
1. 리액트 자체 상태관리(useState,props)
 - 규모가 작거나 데이터 흐름이 단순한 경우 
 - 하지만 컴포넌트의 규모가 늘어나면 계속 늘어나는 props Drilling을 방지하기 위해 상태관리 라이브러리를 사용
2. Context API 
 - 리액트에서 제공하는 전역 상태 공유 도구(React 자체 기능)
 - 여러 단계의 props 전달을 생략하고 트리 전체에서 데이터 접근 가능 
 <단점> 
 해당 상태를 사용하는 모든 하위 컴포넌트들이 리렌더링 되는 이슈로 불필요한 렌더링과 성능저하 이슈가 발생할 수 있다.
3. Redux
 - 가장 오래되고 널리 쓰이는 상태 관리 라이브러리 
 - 전역 Store에서 상태를 관리하고, 액션 -> 리듀서 -> 스토어 업데이트의 프로세스로 흐른다.
 <장점> 
 - 예측 가능성, 디버깅 도구사용(Redux DevTools), 대규모 프로젝트에 안정적
 <단점> 
 - 코드가 장황해질 수 있고, 최근에는 React Toolkit(Rtx)로 간결하게 쓴다. 

 4. Zustand, jotai, Recoil 등 경량 상태 관리 라이브러리 
 - 최근 트렌드로는 Redux보다 가볍고 직관적인 라이브러리 선호 
 - Zustand: 심플한 API, 전역 상태를 쉽게 관리
 - Jotai: 원자(atom) 단위 상태, React hook 친화적 
 - Recoil: Facebook이 만든, React와 잘 맞는 전역 상태 관리

 5. 서버 상태 관리(React Query, SWR) 라이브러리
 - 요즘은 클라이언트 상태 vs 서버 상태를 구분하는게 중요 
 - 서버 상태: API 호출 결과, 캐싱, 로딩/에러 처리
 - React Query나 SWR을 사용하면, API 데이터 관리가 훨씬 편함
 - 즉, 로컬 상태는 useState/Context, 서버 데이터는 React Query 조합

끝으로 데이터를 가져와서 뿌려주는건 실제로 그 데이터를 쓰는 페이지(컴포넌트)에서 호출해서 뿌리는 것이 좋다. 
상단(혹은 최상단)에서 데이터를 가져와서 뿌려준다면 편해 보일 수 있지만, 불필요한 리렌터링과 복잡성이 커진다.

 ### 업계 라이브러리/ 도구 사용 동향 
- 단순 전역 상태: Zustand/ Context 
- 기업 레거시/ 대규모: Redux
- 서버데이터 : React Query 

## 서버
- FireBase
