import * as React from "react";
import { inject, observer } from 'mobx-react';
import ReactResizeDetector from 'react-resize-detector';
import { TAppStore } from '../../store';

interface Props {
  store?: TAppStore
}

@inject('store')
@observer
class Layout extends React.Component<Props, any>{
  private onResize = (width:number):void => {
    const { setWidth } = this.props.store;

    console.log('setWidth', width);
    setWidth(width);
  }


  render(){
    const { children, store } = this.props;

    return(
      <>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <h1>{store.width}</h1>
        {children}
      </>
    )
  }
}

export default Layout;