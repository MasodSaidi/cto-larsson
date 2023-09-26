import React from 'react';
import { Page, Navbar, Toolbar, List, ListInput, Button } from 'framework7-react';

const SetupPasswordPage = () => (
  <Page>
    <Navbar transparent />
    <div className="setup-card">
      <div className="setup-header">
        <div
          style={{
            background: 'url(https://cdn.framework7.io/placeholder/people-160x160-1.jpg) no-repeat center top',
            backgroundSize: 'cover',
            height: document.body.clientWidth < 1028 ? '280px' : '220px',
          }}
        ></div>
        <h1>Setup Password</h1>
        <p>Before we start, choose a password</p>
      </div>
      <div className="setup-content">
        <List>
          <ListInput
            outline
            label="Password"
            floatingLabel
            type="password"
            placeholder="Your password"
            clearButton
          ></ListInput>
          <ListInput
            outline
            label="Confirm Password"
            floatingLabel
            type="password"
            placeholder="Your password"
            clearButton
          ></ListInput>
        </List>
      </div>
      <div className="setup-footer">
        <Button fill large round view="#view-popup" href="/setup-line">Next</Button>
      </div>
    </div>
  </Page>
);

export default SetupPasswordPage;
