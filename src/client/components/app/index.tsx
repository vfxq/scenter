import * as React from 'react';
import { observer } from 'mobx-react';
import { Provider } from 'mobx-react'
import appStore from '../../store';
import Layout from '../layout';
import layoutStore from "../../store/layoutStore";
import Header from "../header";
import About from "../about";

@observer
class App extends React.Component<{}, {}>{
  render(){
    return (
      <Provider appStore={appStore} layoutStore={layoutStore}>
        <Layout>
          <Header />
          <About />
        </Layout>
      </Provider>
    )
  }
}

export default App; 