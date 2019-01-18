import * as React from 'react';
import { observer, Provider } from 'mobx-react';
import appStore from '@stores/index';
import layoutStore from "@stores/layoutStore";
import { About, Contacts, Header, Help, Layout, Masters } from "@components";

@observer
class App extends React.Component<{}, {}>{
  render(){
    return (
      <Provider appStore={appStore} layoutStore={layoutStore}>
        <Layout>
          <Header />
          <About />
          <Help />
          <Masters />
          <Contacts />
        </Layout>
      </Provider>
    )
  }
}

export default App; 