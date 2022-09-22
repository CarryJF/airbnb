import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"


import {HashRouter} from "react-router-dom"
import App from './App';
import "normalize.css"
import 'antd/dist/antd.less';
import "./assets/css/index.css"
import store from "./store"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<div>loading</div>}>
      <HashRouter>
        <App />
        </HashRouter>
    </Suspense>
  </Provider>
  // <React.StrictMode>
  
  // </React.StrictMode>
);
