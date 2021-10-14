# NodeJs Serverless AWS Lambda API

Source: [www.youtube.com/watch?v=ryPgWz6hbXo](https://www.youtube.com/watch?v=ryPgWz6hbXo)

## Start npm

```sh
npm init -y
```

## Amplify

Source: [docs.amplify.aws/start/q/integration/react](https://docs.amplify.aws/start/q/integration/react/)

```sh
npm install -g @aws-amplify/cli
amplify configure
```

## React

```sh
npx create-react-app .
amplify init
npm install aws-amplify @aws-amplify/ui-react
amplify add api
```

Add following code to `src/index.js`...

```js
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
```

## API gateway + Lambda

Create API...

```sh
amplify add api
amplify push
```

Check endpoint: [a8cnh0rrii.execute-api.us-east-1.amazonaws.com/dev/sensor/31d42f54-ef12-4c83-a5be-19a87368b648](https://a8cnh0rrii.execute-api.us-east-1.amazonaws.com/dev/sensor/31d42f54-ef12-4c83-a5be-19a87368b648)

## Deploy frontend

```sh
yarn start
```
