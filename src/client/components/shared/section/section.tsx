import * as React from 'react';
import { Color } from 'csstype';
require('./styles/style.scss');

interface IProps{
  bgImage?: string
}

class Section extends React.Component<IProps, {}>{
  render(){
    const { bgImage, children } = this.props;
    
    const style = {
      "backgroundImage": `url(${bgImage})`
    }

    return(
      <section className="section" style={style}>
        <div className="test">
          {children}
        </div>
      </section>
    )
  }
}

export default Section;