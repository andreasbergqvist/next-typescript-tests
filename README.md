### Example project for enabling Jest / React Testing Library for a Typescript Next.js project

This is based on https://github.com/vercel/next.js/tree/canary/examples/with-jest

#### Install Next.js

`npx create-next-app`

#### Add Typescript

```
touch tsconfig.json
// with npm
npm install --dev typescript @types/react @types/node
npm run dev
// with yarn
yarn add --dev typescript @types/react @types/node
yarn dev
```

#### Add Jest / React Testing Library

```
// with npm
npm install --dev @testing-library/jest-dom @testing-library/react babel-jest jest react-test-renderer identity-obj-proxy @types/jest
// with yarn
yarn add --dev @testing-library/jest-dom @testing-library/react babel-jest jest react-test-renderer identity-obj-proxy @types/jest
```

Add Files:

- [.babelrc](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/.babelrc)
- [jest.config.js](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/jest.config.js)
- [setupTests.ts](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/setupTests.ts)
- [config/jest/cssTransform.js](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/config/jest/cssTransform.js)

Update tsconfig.json:

- Add "types": ["jest", "node"] to compilerOptions (see [tsconfig.json](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/tsconfig.json))

Add tests:

- Examples: [**tests**/index.test.tsx](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/__tests__/index.test.tsx), [components/Title.test.tsx](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/components/Title.test.tsx)

Add npm scripts:

- Add "test" and "test:ci" scripts (see [package.json](https://github.com/andreasbergqvist/next-typescript-tests/blob/main/package.json))

Run tests with `npm test` or `yarn test`
