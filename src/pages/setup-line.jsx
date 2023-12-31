import React from 'react';
import { Page, Navbar, Toolbar, Block, List, ListInput, Button } from 'framework7-react';

const SetupLinePage = () => (
  <Page>
    <Navbar backLink="Back" transparent />
    <div className="setup-card">
      <div className="setup-header">
        <div className="setup-image">
          <img src="setup-image.svg" />
        </div>
        <h1>Setup Larsson Line</h1>
        <p>In order to add Larsson Line, you need to first have a Trading View account</p>
      </div>
      <div className="setup-content">
        <Block>
          <Button large raised round>ADD TO TRADING VIEW</Button>
        </Block>
      </div>
      <div className="setup-footer">
        <Button fill large round view="#view-popup" href="/setup-discord">Next</Button>
      </div>
    </div>
  </Page>
);

export default SetupLinePage;
