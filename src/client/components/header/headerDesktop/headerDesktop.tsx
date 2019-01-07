import * as React from 'react';
require('./styles/style.scss');

interface Props {
  menu: any
}
class HeaderDesktop extends React.Component<Props, {}>{
  
  render(){
    const { menu } = this.props;

    return(
      <div className="desktopHeader">
        <ul className="desktopMenu">
          {menu}
        </ul>
      </div>
    )
  }
}

export default HeaderDesktop;