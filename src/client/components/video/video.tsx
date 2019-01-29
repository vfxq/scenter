import { Section } from "@shared";
import * as React from "react";
import HelpItem from "./helpItem";
import "./styles/style.scss";

export class Video extends React.Component {
  public render() {
    const data = [
      {
        extended: "Определить наличие проклятья может только Мастер.",
        id: "magic",
        title: "Духовные практики",
      },
      {
        extended: "В традиции ламаизма - сон это малая смерть. ",
        id: "dreams",
        title: "Практическая эзотерика",
      },
      {
        extended: "Самая тяжелая и не предсказуемая работа для",
        id: "request",
        title: "Просветление",
      },
      {
        extended: "Быстро решить такую проблему можно с помощью приворота - магического ритуала.",
        id: "family",
        title: "Родовая память",
      },
      {
        extended: "Поиск спутника жизни в наше время ",
        id: "routine",
        title: "Рутина. День сурка.",
      },
      {
        extended: "Поиск спутника жизни в наше время - самая большая проблема.",
        id: "scared",
        title: "Прошлые жизни",
      },
      {
        extended: "Поиск спутника жизни в наше время - самая большая проблема.",
        id: "talant",
        title: "Таланты",
      },
      {
        extended: "Поиск спутника жизни в наше время - самая большая проблема.",
        id: "thinking",
        title: "Навязчивые мысли",
      },
    ];
    const body = data.map((item) => <div key={item.id} className="helpItem"><HelpItem data={item} /></div>);

    return(
      <Section id="video">
        <h1>Видео о...</h1>
        <div className="flex-container">
          {body}
        </div>
      </Section>
    );
  }
}
