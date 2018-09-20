import React from 'react';
import ComponentBase from './component-base';
import MapSearchBar from './map-search-bar';
import MapContainer from './map-container';
import SchemaTable from './schema-table';
import CsvUploader from './csv-uploader';
import EditOptionPicker from './edit-option-picker';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  OverlayTrigger,
  Tooltip,
  Badge,
  Button,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import '../style/feature-creator-container.css';
import csvUploader from './csv-uploader';

class FeatureCreatorContainer extends ComponentBase {
  // contains all the UI that will be displayed in the "create-feature" route

  constructor(props) {
    super(props);
    // this._bind ('');
    // 55cdda503e054b2a8b4967c716ecd42e
  }

  render() {
    // Grid width width must be set to '100%' using inline style
    // TODO: remove className="fcc1", remove import CSS statement, remove css file

    return (
      <Grid className="fcc1" style={{ width: '100%' }}>
        <Row>
          <Col>
            <MapSearchBar />
          </Col>
        </Row>
        <Row>
          <Col sm={8} md={8} lg={8}>
            <MapContainer />
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Grid style={{ width: '100%' }}>
              <Row
                style={{
                  maxHeight: '400px',
                  overflowY: 'scroll',
                  overflowX: 'scroll',
                }}
              >
                <Col>
                  <SchemaTable />
                </Col>
              </Row>
              <Row
                style={{
                  maxHeight: '400px',
                  overflowY: 'scroll',
                  overflowX: 'scroll',
                }}>
                <EditOptionPicker />
              </Row>
              <Row
                style={{
                  maxHeight: '400px',
                  overflowY: 'scroll',
                  overflowX: 'scroll',
                }}
              >
                <Col>
                  <CsvUploader />
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FeatureCreatorContainer;
