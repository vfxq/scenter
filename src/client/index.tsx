import * as React from "react";
import * as ReactDOM from "react-dom";
import * as  WebFont from "webfontloader";

import { App } from "@components";
import "./styles/style.scss";

WebFont.load({
  custom: {
    families: ["Lemon Tuesday", "Roboto Condensed:700"],
    urls: ["./styles/fonts.css"],
  },
  google: {
    families: ["Roboto Condensed:700"],
  },
});

ReactDOM.render (<App/>, document.getElementById("app"));
