import { Section } from "@shared";
import * as React from "react";
import { inject, observer } from "mobx-react";
import VideoItem from "./videoItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/style.scss";

@inject("layoutStore")
@observer
export class Video extends React.Component<any, {}> {
  public sliderPercentage = (): number => {
    const { width } = this.props.layoutStore;
    if (width > 596 && width <= 768) {
      return 33;
    } else if (width > 480 && width <= 596) {
      return 50;
    } else {
      return 100;
    }
  }

  public desktopVideo = (body: any) => {
    return (
      <div className="flex-container">
        {body}
      </div>
    );
  }

  public mobileVideo = (body: any) => {
    return (
      <Carousel showArrows
                  showStatus={false}
                  centerMode
                  centerSlidePercentage={this.sliderPercentage()}
                  showIndicators={false}
                  showThumbs={false} >
          {body}
        </Carousel>
    );
  }

  public render() {
    const { width } = this.props.layoutStore;
    const data = [
      {
        id: "magic",
        title: "Духовные практики",
        video: "FE1L8-PRSLo",
      },
      {
        id: "dreams",
        title: "Эзотерика",
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
        title: "Рутина.",
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
    const body = data.map((item) => <div key={item.id} className="video__item"><VideoItem data={item} /></div>);

    return(
      <Section id="video">
        <h1>Видео</h1>
        {width > 768 ? this.desktopVideo(body) : this.mobileVideo(body) }
      </Section>
    );
  }
}
