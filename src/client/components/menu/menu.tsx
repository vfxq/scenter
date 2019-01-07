import * as React from 'react';
import { inject, observer } from 'mobx-react';
import MenuDesktop from './menuDesktop';
import MenuMobile from './menuMobile'; 
import { TAppStore, TLayoutStore, TMenuItem } from '../../store';

interface Props {
  appStore?: TAppStore,
  layoutStore?: TLayoutStore
}

@inject('appStore','layoutStore')
@observer
class Menu extends React.Component<Props, {}>{
  componentDidMount(){
    const { appStore } = this.props;
    appStore.getMenu();
  }
  render(){
    const { appStore, layoutStore } = this.props;
    const { menu } = appStore;
    const { width } = layoutStore;
      
    const renderedMenu = menu && (menu.length !== 0) ? menu.menuItems.map((item:TMenuItem) => <li key={item.link}>{item.title}</li>) : null;  
    const body = width < 992 ? <MenuMobile menu={renderedMenu} /> : <MenuDesktop menu={renderedMenu}/>

    return(
      <div>
        {body}
      </div>
    )
  }
}

export default Menu;