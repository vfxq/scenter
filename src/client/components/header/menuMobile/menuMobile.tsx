import * as React from 'react';

interface Props {
  menu: any
}

class MenuMobile extends React.Component<Props, {}>{
  
  render(){
    const { menu } = this.props;
    return(
      <>
        Desktop Mobile
        { menu }
      </>
    )
  }
}

export default MenuMobile;