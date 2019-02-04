import Logo from "./img/logo.svg";
import classNames from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import "./slyles/style.scss";

interface IProps {
  menu: any;
  layoutStore?: any;
}

@inject("layoutStore")
@observer
class MenuMobile extends React.Component<IProps, {}> {
  public render() {
    console.log("---", this.props.layoutStore.scrolled );
    const { menu, layoutStore } = this.props;

    const mobileHeader = classNames({
      mobileHeader__topline: true,
      page__scrolled: layoutStore.scrolled,
    });
    return(
      <div className={mobileHeader}>
        <Menu isOpen={ false } >
          {menu}
        </Menu>
        <Logo className="mobileHeader__logo"/> 
        <div className="mobileHeader__name">
          Духовный центр
        </div>
      </div>
    );
  }
}

export default MenuMobile;
