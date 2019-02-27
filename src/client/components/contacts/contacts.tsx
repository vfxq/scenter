import * as React from "react";
import { CONSTS } from "../constants";
import { Section } from "../shared/section";
import * as img from "./img/bg-min.jpg";
import Logo from "./img/logo.svg";
import * as css from "./styles/style.scss";

export function Contacts() {
  return (
    <Section bgImage={img} style={css} id="contacts">
      <h1>Контакты</h1>
      <div className="footer__content">
        <Logo height="3.2em" width="3.2em" fill={"rgba(0,0,0,0.8)"}/>
        <div className="footer__name">
          { CONSTS.NAME }
        </div>
        <div className="footer__contacts">
          <a href={`tel:${CONSTS.PHONE}`}>тел. {CONSTS.PHONE}</a>
          <br />
          <a href={`mailto:${CONSTS.EMAIL}`}>e-mail:  {CONSTS.EMAIL}</a>
        </div>
      </div>
    </Section>
  );
}
