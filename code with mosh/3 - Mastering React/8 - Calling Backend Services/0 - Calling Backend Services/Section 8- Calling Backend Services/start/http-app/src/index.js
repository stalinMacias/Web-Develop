import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import Logger from "./services/logService";

Logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();