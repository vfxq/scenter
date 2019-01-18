import * as React from "react";
import { Section } from '@shared';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

require('./styles/style.scss');
 
class Masters extends React.Component {
  render(){

    return (
      <Section>
        <h1>Мастера</h1>
        <Carousel showArrows showStatus={false} centerMode centerSlidePercentage={30} showIndicators={false} >
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
            <p className="legend">Legend 4</p>
          </div>
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
            <p className="legend">Legend 5</p>
          </div>
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
            <p className="legend">Legend 6</p>
          </div>
          <div className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
            <p className="legend">Legend 7</p>
          </div>
          <div> className="masterItem">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
            <p className="legend">Legend 8</p>
          </div>
        </Carousel>
      </Section>
    )
  }
}

export default Masters;