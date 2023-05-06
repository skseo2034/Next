This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### 프로젝트 생성
-. npx create-next-app@latest --typescript
-. TypeError: this.libOptions.parse is not a function 오류시 
    - package.json 수정 "eslint": "8.22.0"
    - rm -rf node_modules;rm package-lock.json;npm i 실행
-. ESLint: TypeError: this.libOptions.parse is not a function 오류 발생시
    - eslint setting 에서 auto config 선택하고 패턴을 "**/*.(js|ts|jsx|tsx|html|vue)" 으로 변경 한다.

### 참고
-. ESLint: Please specify path to 'eslint' package : https://samtao.tistory.com/28
    - npm install --g eslint
    - intellij 재시작
-. 위 설치 후 다른 오류 발생시 eslint 삭제후 재설치 8.22.0 버전으로
-. node 전역 설치 모듈 확인
    - npm ls -g --depth=0
-. Typescript 적용 안될때, 타입 오류 실시간 체킹 안될때.
    - Intellij IDE 하단 Typescript 확인 : starting 이거나, 버젼없이 Typscript 만 보일때, 클릭하여 bultin Typescript 로 지정한다.