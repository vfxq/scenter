import { Section } from "@shared";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselItem } from "./carouselItem";
import "./styles/style.scss";

interface IDataItem {
  extended: string;
  id: string;
  title: string;
}
interface IProps {
  data: IDataItem[];
  width: number;
}

export class Masters extends React.Component<IProps, {}> {
  public sliderPercentage = (): number => {
    const { width } = this.props;

    if (width > 596 && width <= 768) {
      return 33;
    } else if (width > 480 && width <= 596) {
      return 50;
    } else {
      return 100;
    }
  }

  public render() {
    const { data } = this.props;
    if (!data || data.length === 0) {
      return null;
    }
    const body = data.map((item) => <div key={item.title} className={"masterItem"}><CarouselItem data={item} /></div>);
    return (
      <Section id="video">
        <h1>Видео</h1>
        <Carousel showArrows
                  showStatus={false}
                  centerMode
                  centerSlidePercentage={this.sliderPercentage()}
                  showIndicators={false}
                  showThumbs={false} >
          {body}
        </Carousel>
      </Section>
    );
  }
}
