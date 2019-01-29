import { inject, observer } from "mobx-react";
import * as React from "react";
import ReactResizeDetector from "react-resize-detector";
import { ILayoutStore } from "../../store";
interface IProps {
  layoutStore?: ILayoutStore;
}

@inject("layoutStore")
@observer
export class Layout extends React.Component<IProps, any> {
  public nav = React.createRef<HTMLDivElement>();
  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  public handleScroll = () => {
    const { setScrolled } = this.props.layoutStore;
    const scroll = window.scrollY > 100 ? true : false;
    setScrolled(scroll);
  }
  public onResize = (width: number): void => {
    this.props.layoutStore.setWidth(width);
  }
  public render() {
    const { children } = this.props;
    return (
      <div ref={this.nav}>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        {children}
      </div>
    );
  }
}
