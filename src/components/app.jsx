import React, { useState } from 'react';

import {
  App,
  Panel,
  View,
  Popup,
  Page,
  Navbar,
  List,
  ListItem,
  Icon,
  NavTitle,
  Link,
  NavLeft
} from 'framework7-react';

import routes from '../js/routes';

const MyApp = () => {
  const [selected, setSelected] = useState('Dashboard');

  const f7params = {
    name: 'CTO Larsson',
    theme: 'ios',
    colors: {
      primary: '#2772fa',
    },
    routes: routes,
  };

  return (
    <App { ...f7params }>

      <Panel left push backdrop={false} visibleBreakpoint={1028}>
        <Page>
          <Navbar transparent>
            <NavLeft>
              <img className="logo" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1131440/settings_images/q58TyONWSNae3OVlBAaN_CTO-LARSSON-Logo-2022-PB2-anim-10s-loop.gif" />
            </NavLeft>
          </Navbar>
          <List menuList>
            <ListItem
              link
              tabLink="#tab-1"
              title="Dashboard"
              selected={selected === 'Dashboard'}
              onClick={() => setSelected('Dashboard')}
            >
              <Icon material="dashboard" slot="media" />
            </ListItem>
            <ListItem
              link
              tabLink="#tab-2"
              title="Courses"
              selected={selected === 'Courses'}
              onClick={() => setSelected('Courses')}
            >
              <Icon material="fact_check" slot="media" />
            </ListItem>
            <ListItem
              link
              tabLink="#tab-3"
              title="Reports"
              selected={selected === 'Reports'}
              onClick={() => setSelected('Reports')}
            >
              <Icon material="article" slot="media" />
            </ListItem>
          </List>
        </Page>
      </Panel>

      <View main className="safe-areas" url="/" />

      <Popup id="popup" closeByBackdropClick={false}>
        <View id="view-popup">
          <Page>
          </Page>
        </View>
      </Popup>

    </App>
  )
}

export default MyApp;