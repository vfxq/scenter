import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
require('./slyles/style.scss');

interface Props {
  menu: any
}

class MenuMobile extends React.Component<Props, {}>{
  
  render(){
    const { menu } = this.props;
    return(
      <Menu isOpen={ false } >
        {menu}
      </Menu>
    )
  }
}

export default MenuMobile;
