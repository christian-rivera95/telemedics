import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
ReactDOM.render(<App history={history} />, document.getElementById("root"));

serviceWorker.unregister();
