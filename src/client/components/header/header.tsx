import { Section } from "@shared";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { TAppStore, TLayoutStore, TMenuItem } from "../../store";
import HeaderDesktop from "./headerDesktop";
import * as img from "./img/header_img-min.png";
import MenuMobile from "./menuMobile";
import * as css from "./styles/style.scss";

interface IProps {
  appStore?: TAppStore;
  layoutStore?: TLayoutStore;
}

@inject("appStore", "layoutStore")
@observer
export class Header extends React.Component<IProps, {}> {
  public componentDidMount() {
    const { appStore } = this.props;
    appStore.getMenu();
  }
  public render() {
    const { appStore, layoutStore } = this.props;
    const { menu } = appStore;
    const { width } = layoutStore;
    const renderedMenu = menu && (menu.length !== 0) ? menu.menuItems.map((item: TMenuItem) => <li key={item.link}><a href={`${item.link}`}>{item.title}</a></li>) : null;
    const body = width < 992 ? <MenuMobile menu={renderedMenu} /> : <HeaderDesktop menu={renderedMenu} />;
    return(
      <>
        {body}
        <Section bgImage={img} height={500} style={css}>
          <div className="slogan">
            <h1>Найди дорогу к себе</h1>
          </div>
        </Section>
      </>
    );
  }
}
