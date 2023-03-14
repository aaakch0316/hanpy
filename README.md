# :earth_asia: Welcome to Github API Custom Page

### :seedling: Action

> We are creating a website..  :sleepy:
>
> coming soon~~

### :hourglass_flowing_sand: Get Started

##### development

```
$ npm start
```

- if you want to make Local Environment, you have to make `.env.development.local`. complete! play code!

##### production

```
$ npm run build
$ npm start
```

### Deployment

```
https://han-py.com
```

### :bookmark_tabs: React/JSX Style Convension

##### Basic Rules

- Only include on React component per file

- Each component has one CSS module related to the component. `.module.css`

- Use Hook. so prefer normal functions/arrow functions over classes

##### Naming

- **Extensions** : Use `.jsx` extension for React components

- **Filename**: Use snake_case for filenames. E.g., `reservation_card.jsx`

- **Component Naming**: Use PascalCase. E.g., `ReservationCard`

- **Props Naming**: Avoid using DOM component prop names for different purposes

  ```jsx
  // bad
  <MyComponent style="fancy" />

  // bad
  <MyComponent className="fancy" />

  // good
  <MyComponent variant="fancy" />
  ```

## pj tech

- create-next-app
- Typescript
- chakra-ui
- aws(s3, cloudfront, route 53)

## 개인 목표

view와 Business Logic의 분리에 대한 고민.

## 구현

- aws(s3, cloudfront, route 53) : https://han-py.com
- github action CI/CD

## 일정

#### 3월 0주차

- github action CI/CD

#### 3월 1주차

개인 Repo 보여주기 UI 뺴고 다 만들기
개인 pull request 보여주기 UI 뺴고 다 만들기
개인 commit 보여주기 UI 뺴고 다 만들기

#### 3월 2주차

개인 Repo 보여주기 UI
개인 pull request 보여주기 UI
개인 commit 보여주기 UI

#### 3월 3주차

다른 회원들도 사용가능하게.

- 로그인(github Oauth)
- 회원가입

### 시간되면, 추가 구현

- yarn berry workspace
- jenkins
- docker/kuber

### 아이디어

- github API를 활용하여 관심사 분석 (상위 몇프로 인가)
- 취업 가능한 곳 분석
- 알고리즘도 연결
- 백준 연결

### 도움 필요.

> 기본 컨셉. 사람들이 사용하는 서비스를 만들고 싶다. (어그로가 필요)

- 코딩을 잘하는 먼가를 평가할 수 있는 기준이 있을까?

### 추가 고민

frontend

- DI로 로직 분리

비즈니스 로직을 책임지는 파일 안에 데이터를 책임히는 파일을 불러온다.
