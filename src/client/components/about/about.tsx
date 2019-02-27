import { Section } from "@shared";
import * as React from "react";
import * as css from "./styles/style.scss";

export class About extends React.Component {
  public render() {
    return (
      <Section id="about" style={css}>
        <h1>О духовном центре</h1>
        <div className="bg_pict">
          <div className="about">
            Духовный центр - это сообщество мастеров из разных частей нашей страны.
            Наша профессиональная деятельность - духовные практики. Мы помогаем людям
            осознать себя. Научиться чувствовать и понимать себя и окружающих.
            Мы учим пользовать инструментами для самопознания и использовать их крайне эффективно.
          </div>
        </div>
    </Section>
    );
  }
}
