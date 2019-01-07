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
  private onResize = (width:number):void => {
    this.props.layoutStore.setWidth(width);
  }

  render(){
    const { children, layoutStore } = this.props;

    console.log('--props', this.props);

    return(
      <>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        {children}
        <h1>{layoutStore.width}</h1>
      </>
    )
  }
}

export default Layout;