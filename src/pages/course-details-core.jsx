import React from 'react';
import { Page, Navbar, Toolbar, Block, List, ListItem, Gauge, Icon, ListInput, Button } from 'framework7-react';

const CourseDetailsCorePage = () => (
  <Page>
    <Navbar title="1. Core Insights" subtitle="Five Human Flaws to Leverage for Profit" backLink="Back" />
    <List mediaList>
      <ListItem
        link="#"
        title="Human Flaw #1"
        subtitle="Extent of Technology Change"
      >
        <Gauge
          slot="media"
          type="circle"
          value={1}
          size={44}
          borderColor="#f4d532"
          borderWidth={5}
          valueText="2/2"
          valueFontSize={10}
          valueTextColor="#f4d532"
        />
      </ListItem>
      <ListItem
        link="#"
        title="Human Flaw #2"
        subtitle="Speed of Technology"
      >
        <Gauge
          slot="media"
          type="circle"
          value={1}
          size={44}
          borderColor="#f4d532"
          borderWidth={5}
          valueText="2/2"
          valueFontSize={10}
          valueTextColor="#f4d532"
        />
      </ListItem>
      <ListItem
        link="#"
        title="Human Flaw #3"
        subtitle="Quantifying Technology Success"
      >
        <Gauge
          slot="media"
          type="circle"
          value={1}
          size={44}
          borderColor="#f4d532"
          borderWidth={5}
          valueText="2/2"
          valueFontSize={10}
          valueTextColor="#f4d532"
        />
      </ListItem>
      <ListItem
        link="#"
        title="Human Flaw #4"
        subtitle="Technology Obsolescence"
      >
        <Gauge
          slot="media"
          type="circle"
          value={1}
          size={44}
          borderColor="#f4d532"
          borderWidth={5}
          valueText="2/2"
          valueFontSize={10}
          valueTextColor="#f4d532"
        />
      </ListItem>
      <ListItem
        link="#"
        title="Human Flaw #5"
        subtitle="Big Number Multiplication"
      >
        <Gauge
          slot="media"
          type="circle"
          value={1}
          size={44}
          borderColor="#f4d532"
          borderWidth={5}
          valueText="2/2"
          valueFontSize={10}
          valueTextColor="#f4d532"
        />
      </ListItem>
    </List>
  </Page>
);

export default CourseDetailsCorePage;
