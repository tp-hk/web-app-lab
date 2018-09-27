import React from 'react';
import ComponentBase from './component-base';
import { Tabs, Tab } from 'react-bootstrap';
import MapContainer from './map-container';
import SchemaTable from './schema-table';

class MapSchemaTabPane extends ComponentBase {

  render() {
    return (
      <Tabs defaultActiveKey={1} id='map-schema-tab-pane'>
        <Tab eventKey={1} title='Schema View'>
          <SchemaTable />
        </Tab>
        <Tab eventKey={2} title='Map View'>
          <MapContainer />
        </Tab>
      </Tabs>
    )
  }
}

export default MapSchemaTabPane;