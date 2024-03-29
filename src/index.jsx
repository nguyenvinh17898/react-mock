import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import configureStore from "./app/store/store"

import "./app/plugins/semantic-ui"
import "./app/plugins/ag-grid"
import "./app/plugins/toastify"

import "./index.css"
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
