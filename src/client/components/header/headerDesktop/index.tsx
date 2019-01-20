import * as React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Section } from '@shared';
import Logo from './img/logo.svg';

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
    
    const logoColor = layoutStore.scrolled ? "rgba(0,0,0,0.8)" : "#fff";
    
    const desktopHeader = classNames({
      'desktopHeader': true,
      'desktopHeader__scrolled': layoutStore.scrolled 
    });

    const desktopHeaderName = classNames({
      "desktopHeader__name": true,
      "hide": layoutStore.scrolled
    });  

    return(
      <div className={desktopHeader}>
        <Section>
          <div className="desktopHeader__content">
            <Logo className="desktopHeader__logo" fill={logoColor} height="3.2em" width="3.2em"/>
            <div className={desktopHeaderName}>Духовный центр</div>
            <ul className="desktopHeader__menu">
              {menu}
            </ul>
              <div className="desktopHeader__phone">8 (800) 000-700-00</div>
            <button className="desktopHeader__order">Записаться</button>
          </div>
        </Section>
      </div>
    )
  }
}

export default HeaderDesktop;