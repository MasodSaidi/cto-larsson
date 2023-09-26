import React from 'react';
import { Page, Navbar, Toolbar, Block, List, ListInput, Button } from 'framework7-react';

const SetupDiscordPage = () => (
  <Page>
    <Navbar backLink="Back" transparent />
    <div className="setup-card">
      <div className="setup-header">
        <div className="setup-image">
          <img src="setup-image.svg" />
        </div>
        <h1>Setup Discord</h1>
        <p>In order to join our Discord channel, you need to first have Discord account</p>
      </div>
      <div className="setup-content">
        <Block>
          <Button large raised round>JOIN DISCORD CHANNEL</Button>
        </Block>
      </div>
      <div className="setup-footer">
        <Button fill large round view="#view-popup" href="/setup-done">Next</Button>
      </div>
    </div>
  </Page>
);

export default SetupDiscordPage;
