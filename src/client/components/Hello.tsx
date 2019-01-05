import * as React from 'react';
import { isMobile } from 'utils';

interface Props {
  framework: string
}

class Hello extends React.Component<Props, {}> {
  render(){
    const { framework } = this.props;
    console.log('--isMobile:', isMobile());
    return (
      <>
        <h1>Hello {framework}</h1>
        Nice! Awesome!!! Really cute!! Done!!!
      </>
    );
  }
}

export default Hello;