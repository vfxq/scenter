import { Section } from "@shared";
import { CarouselItem } from "./carouselItem";
import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/style.scss";

interface IDataItem {
  extended: string;
  id: string;
  title: string;
}
interface IProps {
  data: IDataItem[];
}

export class Masters extends React.Component<IProps, {}> {
  public render() {
    const { data } = this.props;
    const body = data.map((item) => <div key={item.title} className="masterItem"><CarouselItem data={item} /></div>);
    return (
      <Section>
        <h1>Мастера</h1>
        <Carousel showArrows showStatus={false} centerMode centerSlidePercentage={30} showIndicators={false} showThumbs={false}>
          {body}
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </Section>
    );
  }
}
