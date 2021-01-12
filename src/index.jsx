import * as React from "react";
import { render } from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import App from "./components/App";

render(<App content="Hello, World!" />, document.getElementById("root"));
