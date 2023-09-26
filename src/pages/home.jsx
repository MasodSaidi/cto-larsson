import React, { useEffect } from 'react';

import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Tabs,
  Tab,
  Block,
  BlockTitle,
  Button,
  List,
  ListItem,
  Toggle,
  Gauge,
  Icon,
  Popover,
  Panel,
  f7,
  f7ready
} from 'framework7-react';

const HomePage = () => {
  const isSmallScreen = document.body.clientWidth < 1028;

  useEffect(() => {
    f7ready((f7) => {
      setTimeout(() => {
        const popup = f7.popup.get("#popup");
        const view = f7.view.get("#view-popup");
        popup.open(true);
        view.router.navigate("/setup-password", { reloadCurrent: true, animate: true })
      }, 300);
    })
  }, []);

  return (
    <Page name="home" pageContent={false}>
      <Navbar>
        <NavLeft>
          <img className="logo mobile" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/1131440/settings_images/q58TyONWSNae3OVlBAaN_CTO-LARSSON-Logo-2022-PB2-anim-10s-loop.gif" />
        </NavLeft>
        <NavRight>
          <Link popoverOpen=".popover-menu">
          <img
            style={{ borderRadius: '100%' }}
            src="https://pbs.twimg.com/profile_images/1588264694057418759/KCSxfJXG_400x400.jpg"
            width="40"
          />
          </Link>
        </NavRight>
      </Navbar>
      <Toolbar bottom tabbar icons className='tabbar-main'>
        <Link tabLink="#tab-1" text="Dashboard" iconMaterial="dashboard" tabLinkActive />
        <Link tabLink="#tab-2" text="Courses" iconMaterial="fact_check" />
        <Link tabLink="#tab-3" text="Reports" iconMaterial="article" />
      </Toolbar>
      <Tabs swipeable={isSmallScreen}>
        <Tab id="tab-1" className="page-content" tabActive>
          <BlockTitle large>Dashboard</BlockTitle>
          <img
            style={{ width: "100%", minWidth: "780px" }}
            src="dashboard.png"
          />
        </Tab>
        <Tab id="tab-2" className="page-content">
          <BlockTitle large>Courses</BlockTitle>
          <List mediaList>
            <ListItem
              link="/course-details-core"
              title="1. Core Insights"
              subtitle="Five Human Flaws to Leverage for Profit"
            >
              <Gauge
                slot="media"
                type="circle"
                value={1}
                size={44}
                borderColor="#f4d532"
                borderWidth={5}
                valueText="6/6"
                valueFontSize={10}
                valueTextColor="#f4d532"
              />
            </ListItem>
            <ListItem
              link="/course-details-one"
              title="2. One Thing To Remember"
              subtitle="If You Only Remember One Thing"
            >
              <Gauge
                slot="media"
                type="circle"
                value={0.5}
                size={44}
                borderColor="#00599b"
                borderWidth={5}
                valueText="1/2"
                valueFontSize={10}
                valueTextColor="#00599b"
              />
            </ListItem>
            <ListItem
              link="/course-details-range"
              title="3. Range VS. Trend"
              subtitle="Range Or Trend When Trading Technology"
            >
              <Gauge
                slot="media"
                type="circle"
                value={0}
                size={44}
                borderColor="#00599b"
                borderWidth={5}
                valueText="0/2"
                valueFontSize={10}
                valueTextColor="#00599b"
              />
            </ListItem>
            <ListItem
              link="#"
              title="4. Candle Timeframe"
              subtitle="Candle Timeframe When Trading Technology"
              disabled={true}
            >
              <Gauge
                slot="media"
                type="circle"
                value={0}
                size={44}
                borderColor="#00599b"
                borderWidth={5}
                valueText="0/2"
                valueFontSize={10}
                valueTextColor="#00599b"
              />
              <Icon slot="after" material="pending_actions" />
            </ListItem>
          </List>
        </Tab>
        <Tab id="tab-3" className="page-content">
          <BlockTitle large>Reports</BlockTitle>
          <List mediaList>
            <ListItem
              external
              target="_blank"
              link="https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/49392/themes/2154980537/downloads/dcaa76e-a5e6-ebd-e160-5625017ac428_CTO_Larsson_TA_Report_2023-09-22.pdf"
              title="22nd of September, 2023"
              text="Despite the dramatic breakout in yields this week, nothing has changed for Bitcoin"
            >
              <img
                slot="media"
                style={{ borderRadius: '8px' }}
                src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                width="68"
              />
            </ListItem>
            <ListItem
              external
              target="_blank"
              link="https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/49392/themes/2154907612/downloads/ea31d-cfcd-70a-07f6-7e156616a8_CTO_Larsson_TA_Report_2023-09-15.pdf"
              title="15th of September, 2023"
              text="Last week’s headline was “Still in Range - Don’t Panic Yet”.
              I also wrote “The place to sell is not at support, at the range bottom.”"
            >
              <img
                slot="media"
                style={{ borderRadius: '8px' }}
                src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
                width="68"
              />
            </ListItem>
            <ListItem
              external
              target="_blank"
              link="https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/49392/themes/2154837222/downloads/c3301d2-041b-14e-e7ff-a6db1e223c2_CTO_Larsson_TA_Report_2023-09-08.pdf"
              title="8th of September, 2023"
              text="Right now we are not in trending territory. We are in the chop, in a range, in consolidation. The trend
              direction matters little to nothing here while we are just bouncing around the range."
            >
              <img
                slot="media"
                style={{ borderRadius: '8px' }}
                src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
                width="68"
              />
            </ListItem>
          </List>
        </Tab>
      </Tabs>
      <Popover className="popover-menu">
        <List>
          <ListItem link="#" popoverClose title="Profile" />
          <ListItem link="#" popoverClose title="Notifications" />
          <ListItem link="#" popoverClose title="Subscriptions" />
          <ListItem link="#" popoverClose title="Log Out" />
        </List>
      </Popover>
    </Page>
  )
}
export default HomePage;