import { Section } from "@shared";
import { inject, observer } from "mobx-react";
import * as React from "react";
import * as Scroll from "react-scroll";
import { IAppStore, ILayoutStore, IMenuItem } from "../../store";
import * as img from "./img/header_img-min.png";
import * as css from "./styles/style.scss";
const HeaderDesktop = React.lazy(() => import("./headerDesktop"));
import MenuMobile from "./MenuMobile";

interface IProps {
  appStore?: IAppStore;
  layoutStore?: ILayoutStore;
}

interface IState {
  menuOpen: boolean;
  isOpen?: boolean;
}

@inject("appStore", "layoutStore")
@observer
export class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  public componentDidMount() {
    const { appStore } = this.props;
    appStore.getMenu();

    Scroll.Events.scrollEvent.register("begin", () => {
      this.closeMenu();
    });
    Scroll.Events.scrollEvent.register("end", (to, element) => { console.log("end", to, element); });
    Scroll.scrollSpy.update();
  }

  public componentWillUnmount() {
    Scroll.Events.scrollEvent.remove("begin");
    Scroll.Events.scrollEvent.remove("end");
  }

  public closeMenu = () => {
    this.setState( () => ({
      menuOpen: false,
    }));
  }

  public openMenu = () => {
    this.setState( () => ({
      menuOpen: true,
    }));
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
    const body = width < 992
                  ? <MenuMobile menu={renderedMenu} isVisible={this.state.menuOpen} openMenu={this.openMenu}/>
                  : <HeaderDesktop menu={renderedMenu} />;
    return(
      <>
        <React.Suspense fallback={<div>Loading...</div>}>
          {body}
        </React.Suspense>
        <Section id="header" bgImage={img} style={css}>
          <div className="slogan">
            <h1>Найди дорогу к себе</h1>
          </div>
        </Section>
      </>
    );
  }
}
