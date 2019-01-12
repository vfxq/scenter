import * as React from 'react';
require('./styles/style.scss');

interface IProps{
  bgImage?: string,
  height?: number
}

class Section extends React.Component<IProps, {}>{
  render(){
    const { bgImage, height, children } = this.props;
    
    const bg = bgImage ? {"backgroundImage": `url(${bgImage})`} : null;
    
    const styles = {
      "height": height || 'auto'
    };

    return(
      <section className="section" style={Object.assign( styles, bg )}>
        <div className="content">
          {children}
        </div>
      </section>
    )
  }
}

export default Section;