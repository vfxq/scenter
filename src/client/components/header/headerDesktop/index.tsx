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
        <div className="content">
          <div className="topLine">
            <span>8 (800) 000-700-00</span>
            <button className="order">Записаться</button>
          </div>
          <ul className="desktopMenu">
            {menu}
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderDesktop;