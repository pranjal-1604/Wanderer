import React from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header />
      <Row className="no-gutters">
        <Col lg={4}><List /></Col>
        <Col lg={8}><Map /></Col>
      </Row>
    </div>
  );
}

export default App;
