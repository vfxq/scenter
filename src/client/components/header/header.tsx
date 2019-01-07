import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Section from '../shared/section';
import HeaderDesktop from './headerDesktop';
import MenuMobile from './menuMobile'; 
import { TAppStore, TLayoutStore, TMenuItem } from '../../store';
import { Container, Row } from 'reactstrap';

interface Props {
  appStore?: TAppStore,
  layoutStore?: TLayoutStore
}

@inject('appStore','layoutStore')
@observer
class Header extends React.Component<Props, {}>{
  componentDidMount(){
    const { appStore } = this.props;
    appStore.getMenu();
  }
  render(){
    const { appStore, layoutStore } = this.props;
    const { menu } = appStore;
    const { width } = layoutStore;
      
    const renderedMenu = menu && (menu.length !== 0) ? menu.menuItems.map((item:TMenuItem) => <li key={item.link}>{item.title}</li>) : null;  
    const body = width < 992 ? <MenuMobile menu={renderedMenu} /> : <HeaderDesktop menu={renderedMenu}/>

    return(
      <>
        {body}
        <Section>
          <Container className="fixed">
            <Row>
              swisniwd
              <h1>dewnfdewf</h1>
              <h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1>
              <h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1>
              <h1>dewnfdewf</h1><h1>dewnfdewf</h1><h1>dewnfdewf</h1>
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}

export default Header;