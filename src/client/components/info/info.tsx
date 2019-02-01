import { Masters, Video } from "@components";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { ILayoutStore } from "../../store";

interface IProps {
  layoutStore?: ILayoutStore;
}

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

function Info(props: IProps) {
  const { layoutStore } = props;
  const { width } = layoutStore;

  const body = width > 768 ? <Video /> : <Masters data={data} width={width}/>;
  return body;
}

export default inject("layoutStore")(observer(Info));
