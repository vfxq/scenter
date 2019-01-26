import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import "./slyles/style.scss";

interface IProps {
  menu: any;
}

class MenuMobile extends React.Component<IProps, {}> {
  public render() {
    const { menu } = this.props;
    return(
      <Menu isOpen={ false } >
        {menu}
      </Menu>
    );
  }
}

export default MenuMobile;
