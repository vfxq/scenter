import * as React from "react";
import { Section } from "../shared/section";
import * as img from "./img/bg-min.jpg";
import Logo from "./img/logo.svg";
import * as css from "./styles/style.scss";

export function Contacts() {
  return (
    <Section bgImage={img} height={400} style={css}>
      <h1>Контакты</h1>
      <div className="footer__content">
        <Logo height="3.2em" width="3.2em" fill={"rgba(0,0,0,0.8)"}/>
        <div className="footer__name">
          духовный центр
        </div>
        <div className="footer__contacts">
          <div className="footer__ite">
            Новосибирск
          </div>
          <div className="footer__ite">
            Москва
          </div>
        </div>
      </div>
    </Section>
  );
}
