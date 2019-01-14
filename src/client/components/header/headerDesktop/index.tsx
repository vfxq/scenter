import * as React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
require('./styles/style.scss');

interface Props {
  menu: any,
  layoutStore?: any
}
@inject('layoutStore')
@observer
class HeaderDesktop extends React.Component<Props, {}>{
  
  render(){
    const { menu, layoutStore } = this.props;

    const style={
      background: layoutStore.scrolled ? 'rgba(f,f,f,0.3)' : 'transparent',
      a: {
        color: layoutStore.scrolled ? '#0000ff' : '#ff0000'
      }
    };

    var liClasses = classNames({
      'desktopHeader': true,
      'desktopHeader__scrolled': layoutStore.scrolled 
    });

    return(
      <div className={liClasses}>
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