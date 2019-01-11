import * as React from 'react';
import { Color } from 'csstype';
require('./styles/style.scss');

interface IProps{
  bgImage?: string,
  height?: number
}

class Section extends React.Component<IProps, {}>{
  render(){
    const { bgImage, height, children } = this.props;
    
    const style = {
      "backgroundImage": `url(${bgImage})`,
      "height": height || 'auto'
    }

    return(
      <section className="section" style={style}>
        <div className="content">
          {children}
        </div>
      </section>
    )
  }
}

export default Section;