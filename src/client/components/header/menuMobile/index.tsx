import * as React from "react";
import { inject, observer } from "mobx-react";
import { slide as Menu } from "react-burger-menu";
import classNames from "classnames";
import Logo from "./img/logo.svg";
import { CONSTS } from "@components";
import "./slyles/style.scss";

interface IProps {
  menu?: React.ReactNode[];
  layoutStore?: {
    scrolled: boolean;
  };
}

@inject("layoutStore")
@observer
class MenuMobile extends React.Component<IProps, {}> {
  public render() {
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
          { CONSTS.NAME }
        </div>
      </div>
    );
  }
}

export default MenuMobile;
