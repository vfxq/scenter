import { About, Contacts, Header, Video, Layout } from "@components";
import appStore from "@stores/appStore";
import layoutStore from "@stores/layoutStore";
import { observer, Provider } from "mobx-react";
import * as React from "react";

@observer
export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider appStore={appStore} layoutStore={layoutStore}>
        <Layout>
          <Header />
          <About />
          <Video />
          <Contacts />
        </Layout>
      </Provider>
    );
  }
}
