import { About, Contacts, Header, Video, Layout, Popup } from "@components";
import appStore from "@stores/appStore";
import layoutStore from "@stores/layoutStore";
import popupStore from "@stores/popupStore";
import { observer, Provider } from "mobx-react";
import * as React from "react";

@observer
export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider appStore={appStore} layoutStore={layoutStore} popupStore={popupStore}>
        <Layout>
          <Header />
          {/* <About /> */}
          <Video />
          <Contacts />
          <Popup />
        </Layout>
      </Provider>
    );
  }
}
