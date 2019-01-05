import * as React from 'react';

interface Props {
  framework: string
}

class Hello extends React.Component<Props, {}> {
  render(){
    const { framework } = this.props;
    return (
      <>
        <h1>Hello {framework}</h1>
        Nice! Awesome!!! Really cute!!
      </>
    );
  }
}

export default Hello;