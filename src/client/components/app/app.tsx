import * as React from 'react';
import { observer } from 'mobx-react';
import { Provider } from 'mobx-react'
import appStore from '../../store/appStore';
import Layout from '../layout';
import Menu from "../menu";

interface Props {
  store?: any
}

@observer
class App extends React.Component<Props, {}>{
  render(){
    const {store} = this.props;
    
    return (
      <Provider store={appStore}>
        <Layout>
          <Menu />
        </Layout>
      </Provider>
    )
  }
}

export default App; 