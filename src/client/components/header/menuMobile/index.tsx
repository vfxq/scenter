import * as React from "react";
// import { CSSTransition } from 'react-transition-group';
import { inject, observer } from "mobx-react";
import classNames from "classnames";
import Logo from "./img/logo.svg";
import { CONSTS } from "@components";
import "./slyles/style.scss";

interface IProps {
  isVisible: boolean;
  openMenu: () => void;
  menu?: React.ReactNode[];
  layoutStore?: {
    scrolled: boolean;
  };
}

@inject("layoutStore")
@observer
class MenuMobile extends React.Component<IProps, {}> {

  public renderMenu = () => {
    return (
      <div className="mobileHeader__menu">
        {this.props.menu}
      </div>
    );
  }

  public render() {
    const { menu, layoutStore, isVisible, openMenu } = this.props;
    const mobileHeader = classNames({
      mobileHeader__topline: true,
      page__scrolled: layoutStore.scrolled,
    });

    return(
      <div className={mobileHeader}>
        { isVisible ? this.renderMenu() : null }
        <div className="mobileHeader__container">
          <input
            id="click"
            name="exit"
            type="checkbox"
            checked={isVisible}
            onChange={openMenu}
          />
          <label htmlFor="click">
            <span className="burger"></span>
          </label>
        </div>
        <Logo className="mobileHeader__logo"/>
        <div className="mobileHeader__name">
          { CONSTS.NAME }
        </div>
      </div>
    );
  }
}

export default MenuMobile;
