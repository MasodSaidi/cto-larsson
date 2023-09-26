import React from 'react';
import { Page, Navbar, Toolbar, Block, List, ListItem, Gauge, Icon, ListInput, Button } from 'framework7-react';

const CourseDetailsOnePage = () => (
  <Page>
    <Navbar title="2. One Thing To Remember" subtitle="If You Only Remember One Thing" backLink="Back" />
    <List mediaList>
      <ListItem
        link="#"
        title="Video"
      >
        <Gauge
          slot="media"
          type="circle"
          value={1}
          size={44}
          borderColor="#f4df4d"
          borderWidth={5}
          valueText="✓"
          valueFontSize={10}
          valueTextColor="#f4df4d"
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

export default CourseDetailsOnePage;
