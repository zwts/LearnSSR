- [eslint](https://eslint.org/docs/latest/use/configure/): 
    ```shell
    npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser  --save-dev
    npx eslint --lint
    ``` 
- [express](https://expressjs.com/) `npm install express --save`.Express is a minimal and flexible Node.js web application framework 

- [axios](https://axios-http.com/docs/intro) Axios is a simple promise based HTTP client for the browser and node.js
- [body-parser](https://github.com/expressjs/body-parser#readme)Parse incoming request bodies in a middleware before your handlers

- [webpack](https://webpack.wuhaolin.cn/)
  ```shell
  npm install @babel/preset-env babel-loader ts-loader webpack webpack-merge webpack-cli --save-dev
  ```

- [require & import](https://www.cnblogs.com/datiangou/p/10158960.html)

- React
  - react dom [server api](https://legacy.reactjs.org/docs/react-dom-server.html)
  - 同构: “同构”，是服务器端渲染的核心概念，同一套 React 代码在服务器端渲染一遍，然后在客户端再执行一遍。服务端负责静态 dom 的拼接，而客户端负责事件的绑定，不仅是模板页面渲染，后面的路由，数据的请求都涉及到同构的概念。
  - [ReactDom.hydrateRoot](https://zh-hans.react.dev/reference/react-dom/client/hydrateRoot)Call hydrateRoot to “attach” React to existing HTML that was already rendered by React in a server environment.
  - [react-helmet](https://www.npmjs.com/package/react-helmet)

