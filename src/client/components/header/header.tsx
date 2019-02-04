import { Section } from "@shared";
import { inject, observer } from "mobx-react";
import * as React from "react";
import * as Scroll from "react-scroll";
import { IAppStore, ILayoutStore, IMenuItem } from "../../store";
import HeaderDesktop from "./headerDesktop";
import * as img from "./img/header_img-min.png";
import MenuMobile from "./menuMobile";
import * as css from "./styles/style.scss";

interface IProps {
  appStore?: IAppStore;
  layoutStore?: ILayoutStore;
}

@inject("appStore", "layoutStore")
@observer
export class Header extends React.Component<IProps, {}> {
  public componentDidMount() {
    const { appStore } = this.props;
    appStore.getMenu();

    Scroll.Events.scrollEvent.register("begin", (to, element) => { console.log("begin", to, element); });
    Scroll.Events.scrollEvent.register("end", (to, element) => { console.log("end", to, element); });
    Scroll.scrollSpy.update();
  }

  public componentWillUnmount() {
    Scroll.Events.scrollEvent.remove("begin");
    Scroll.Events.scrollEvent.remove("end");
  }

  public render() {
    const { appStore, layoutStore } = this.props;
    const { menu } = appStore;
    const { width } = layoutStore;
    const renderedMenu = menu && (menu.length !== 0)
      ? menu.menuItems.map((item: IMenuItem) =>
        <li key={item.link}>
          <Scroll.Link to={item.link} activeClass="active" spy={true} smooth={true} duration={500} offset={-50}>
            {item.title}
           </Scroll.Link>
        </li>)
      : null;
    const body = width < 992 ? <MenuMobile menu={renderedMenu} /> : <HeaderDesktop menu={renderedMenu} />;
    return(
      <>
        {body}
        <Section id="header" bgImage={img} style={css}>
          <div className="slogan">
            <h1>Найди дорогу к себе</h1>
          </div>
        </Section>
      </>
    );
  }
}
