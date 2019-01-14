import * as React from "react";
import { inject, observer } from 'mobx-react';
import ReactResizeDetector from 'react-resize-detector';

import { TLayoutStore } from '../../store';
interface Props {
  layoutStore?: TLayoutStore
}

@inject('layoutStore')
@observer
class Layout extends React.Component<Props, any>{
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nav = React.createRef<HTMLDivElement>();

  public handleScroll = () => {
    const { setScrolled } = this.props.layoutStore;
    const scroll = window.scrollY > 370 ? true : false;
    setScrolled(scroll);
  }

  private onResize = (width:number):void => {
    this.props.layoutStore.setWidth(width);
  }

  render(){
    const { children } = this.props;
   

    return(
      <div ref={this.nav}>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        {children}
      </div>
    )
  }
}

export default Layout;