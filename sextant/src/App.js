import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Container from './Container';
import AddressDisplay from './AddressDisplay';
import PylonConnector from './PylonConnector';

class App extends Component {
    render() {
        return (
          <div className="App">
            <img
              className="image"
              alt=""
              src="https://pbs.twimg.com/profile_images/1580961507566751744/2pydn4GY_400x400.jpg"
            />
            <Banner bannerText="Cisco's Sextant" />
            <Container name="Public IPv4 Address">
              <AddressDisplay url="https://api.ipify.org?format=json" />
            </Container>
            <Container name="Public IPv6 Address">
              <AddressDisplay url="https://api64.ipify.org?format=json" />
            </Container>
            <Container name="Pylon Packet Latency">
              <PylonConnector />
            </Container>
          </div>
          
        );
    }
}

export default App;
