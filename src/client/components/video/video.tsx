import { Section } from "@shared";
import * as React from "react";
import HelpItem from "./helpItem";
import "./styles/style.scss";

export class Video extends React.Component {
  public render() {
    const data = [
      {
        id: "magic",
        title: "Духовные практики",
        video: "FE1L8-PRSLo",
      },
      {
        id: "dreams",
        title: "Практическая эзотерика",
        video: "CidoUw9_Obk",
      },
      {
        id: "highlights",
        title: "Просветление",
        video: "UY47iicKadQ",
      },
      {
        id: "remember",
        title: "Родовая память",
        video: "_bHzJu2Smz8",
      },
      {
        id: "routine",
        title: "Рутина. День сурка.",
        video: "mqatpYzEadY",
      },
      {
        id: "scared",
        title: "Прошлые жизни",
        video: "7k4gLnvKepg",
      },
      {
        id: "talant",
        title: "Таланты",
        video: "M8jpAKAp5AY",
      },
      {
        id: "thinking",
        title: "Навязчивые мысли",
        video: "nDPw3ocpb1k",
      },
    ];
    const body = data.map((item) => <div key={item.id} className="helpItem"><HelpItem data={item} /></div>);

    return(
      <Section id="video">
        <h1>Видео</h1>
        <div className="flex-container">
          {body}
        </div>
      </Section>
    );
  }
}
