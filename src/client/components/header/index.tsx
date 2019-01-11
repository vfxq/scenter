import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Section from '../shared/section';
import HeaderDesktop from './headerDesktop';
import MenuMobile from './menuMobile'; 
import { TAppStore, TLayoutStore, TMenuItem } from '../../store';
require('./styles/style.scss');

interface Props {
  appStore?: TAppStore,
  layoutStore?: TLayoutStore
}

@inject('appStore','layoutStore')
@observer
class Header extends React.Component<Props, {}>{
  componentDidMount(){
    const { appStore } = this.props;
    appStore.getMenu();
  }
  render(){
    const { appStore, layoutStore } = this.props;
    const { menu } = appStore;
    const { width } = layoutStore;
    const img = require('./img/header_img.png')
      
    const renderedMenu = menu && (menu.length !== 0) ? menu.menuItems.map((item:TMenuItem) => <li key={item.link}><a href={`#${item.link}`}>{item.title}</a></li>) : null;  
    const body = width < 992 ? <MenuMobile menu={renderedMenu} /> : <HeaderDesktop menu={renderedMenu}/>

    return(
      <>
        {body}
        <Section bgImage={img} height={500}>
          <div className="slogan">
            <h1>Найди дорогу к себе</h1>
          </div>
        </Section>
      </>
    )
  }
}

export default Header;