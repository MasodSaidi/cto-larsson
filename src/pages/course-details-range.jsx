import React from 'react';
import { Page, Navbar, Toolbar, Block, List, ListItem, Gauge, Icon, ListInput, Button } from 'framework7-react';

const CourseDetailsRangePage = () => (
  <Page>
    <Navbar title="3. Range VS. Trend" subtitle="Range Or Trend When Trading Technology" backLink="Back" />
    <List mediaList>
      <ListItem
        link="#"
        title="Video"
      >
        <Gauge
          slot="media"
          type="circle"
          value={0}
          size={44}
          borderColor="#00599b"
          borderWidth={5}
          valueText="-"
          valueFontSize={10}
          valueTextColor="#00599b"
        />
      </ListItem>
      <ListItem
        link="#"
        title="Exercise"
      >
        <Gauge
          slot="media"
          type="circle"
          value={0}
          size={44}
          borderColor="#00599b"
          borderWidth={5}
          valueText="-"
          valueFontSize={10}
          valueTextColor="#00599b"
        />
      </ListItem>
    </List>
  </Page>
);

export default CourseDetailsRangePage;
