## To make blockchain using typescript


### Typescript 환경설정
#### 1. node.js 환경설정
```
npm init -y
```
#### 2. typescript 설치
```
npm i -D typescript
```
#### 3. tsconfig.json 설정
- terminal
```
touch tsconfig.json
```
- tsconfig.json
```
{
  "include" : ["src"] // src 폴더의 모든 파일을 확인한다는 뜻.
  "compilerOptions": {
    "outDir": "build", // 자바스트립트 파일이 생성될 디렉터리를 지정.
    "target": "ES6", // 어떤 버전의 자바스크립트로 컴파일 할 것인지.
    "lib": ["ES6", "DOM"], // 합쳐진 라이브러리에서 정의된 파일을 특정 => 자바스크립트 코드가 어디에 동작할 것인지 작성.
    "strict": true, // 엄격하게 검사.
    "allowJs" : true, // js 파일들 ts에서 import해서 쓸 수 있는지 
    "esModuleInterop": true, // ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있다.
    "module": "CommonJS", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  }
}
```
- package.json
```
"scripts": {
    "build" : "tsc",
    "start": "node build/index.js"
  }
```

#### 4. ts-node & nodemon 설치
> ts-node : 빌드 없이 타입스크립트를 설치<br />
> nodemon : 자동으로 커멘드를 실행
- terminal
```
npm i -D ts-node
```
- package.json
```
"scripts": {
    "build": "tsc",
    "dev": "ts-node src/index.js",
    "start": "node build/index.js"
  }
```