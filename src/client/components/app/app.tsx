import * as React from 'react';
import { observer } from 'mobx-react';
import { Provider } from 'mobx-react'
import appStore from '../../store';
import Layout from '../layout';
import Header from "../header";
import layoutStore from "../../store/layoutStore";

@observer
class App extends React.Component<{}, {}>{
  render(){
    return (
      <Provider appStore={appStore} layoutStore={layoutStore}>
        <Layout>
          <Header />
        </Layout>
      </Provider>
    )
  }
}

export default App; 