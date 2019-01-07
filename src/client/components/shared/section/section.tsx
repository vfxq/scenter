import * as React from 'react';
require('./styles/style.scss');



class Section extends React.Component{
  render(){
    return(
      <section className="section">
        {this.props.children}
      </section>
    )
  }
}

export default Section;