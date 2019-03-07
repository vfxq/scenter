import * as React from "react";
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
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
export class MenuMobile extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    const { menu, layoutStore, isVisible, openMenu } = this.props;

    return (
      <CSSTransition
        in={layoutStore.scrolled}
        classNames="mobileHeader__topline"
        timeout={200}
      >
      <div className="mobileHeader__topline">
        <CSSTransition
          in={isVisible}
          classNames="mobileHeader__menu"
            timeout={200}
        >
          <div className="mobileHeader__menu">
            {menu}
          </div>
        </CSSTransition>
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
      </CSSTransition>
    );
  }
}

export default MenuMobile;
