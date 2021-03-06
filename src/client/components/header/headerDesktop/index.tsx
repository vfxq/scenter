import { Section } from "@shared";
import classNames from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { CONSTS } from "../../constants";
import Logo from "./img/logo.svg";
import * as css from "./styles/style.scss";

interface IProps {
  menu?: React.ReactNode[];
  layoutStore?: {
    scrolled: boolean;
  };
}

@inject("layoutStore")
@observer
class HeaderDesktop extends React.Component<IProps, {}> {
  public render() {
    const { menu , layoutStore } = this.props;
    const logoColor = layoutStore.scrolled ? "rgba(0,0,0,0.8)" : "#fff";
    const desktopHeader = classNames({
      desktopHeader: true,
      desktopHeader__scrolled: layoutStore.scrolled,
    });
    const desktopHeaderName = classNames({
      desktopHeader__name: true,
      hide: layoutStore.scrolled,
    });

    return (
      <div className={desktopHeader}>
        <Section style={css}>
          <div className="desktopHeader__content">
            <Logo className="desktopHeader__logo" fill={logoColor} height="3.2em" width="3.2em"/>
            <div className={desktopHeaderName}>{ CONSTS.NAME }</div>
            <ul className="desktopHeader__menu">
              {menu}
            </ul>
            <div className="desktopHeader__phone">
              <a href={`tel:${CONSTS.PHONE}`}>тел. {CONSTS.PHONE}</a>
            </div>
            <a href={`mailto:${CONSTS.EMAIL}`} className="desktopHeader__order">Написать</a>
          </div>
        </Section>
      </div>
    );
  }
}

export default HeaderDesktop;
