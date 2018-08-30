import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Fixtures from './fixture';
import Live from './live';
import Results from './results';

​export default class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="FIXTURES">
            <Fixtures />
          </Tab>
          <Tab heading="LIVE">
            <Live />
          </Tab>
          <Tab heading="RESULTS">
            <Results />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
