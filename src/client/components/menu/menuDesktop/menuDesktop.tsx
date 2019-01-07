import * as React from 'react';

interface Props {
  menu: any
}
class MenuDesktop extends React.Component<Props, {}>{
  
  render(){
    const { menu } = this.props;

    return(
      <ul>
        {menu}
      </ul>
    )
  }
}

export default MenuDesktop;