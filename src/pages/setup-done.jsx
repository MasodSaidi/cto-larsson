import React from 'react';
import { Page, Navbar, Toolbar, Block, List, ListInput, Button, Icon } from 'framework7-react';

const SetupDonePage = () => (
  <Page>
    <Navbar backLink="Back" transparent />
    <div className="setup-card">
      <div className="setup-header" style={{ marginTop: "72px" }}>
        <h1>Success!</h1>
        <p>You've successfully finished the setup process. Get started with your first course.</p>
      </div>
      <div className="setup-content">
        <div className="wrapper"> 
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        </div>
      </div>
      <div className="setup-footer">
        <Button fill large round popupClose="#popup">Get Started</Button>
      </div>
    </div>
  </Page>
);

export default SetupDonePage;
