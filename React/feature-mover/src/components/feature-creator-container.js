import React from 'react';
import ComponentBase from './component-base';
import MapSearchBar from './map-search-bar';
// import MapContainer from './map-container';
// import SchemaTable from './schema-table';
import MapSchemaTabPane from './map-schema-tab-pane';
import CsvUploader from './csv-uploader';
import EditOptionPicker from './edit-option-picker';
import UpdateSettings from './update-settings';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import '../style/feature-creator-container.css';

class FeatureCreatorContainer extends ComponentBase {
  // contains all the UI that will be displayed in the "create-feature" route

  constructor(props) {
    super(props);
  }

  render() {
    // Grid width width must be set to '100%' using inline style
    // TODO: remove className="fcc1", remove import CSS statement, remove css file

    // control the visibility of child elements
    const mapSchemaTabPane = this.props.webmapId ? <MapSchemaTabPane /> : null;
    const editOptionPicker = this.props.fields ? <EditOptionPicker /> : null;
    const csvUploader = this.props.editOption ? <CsvUploader /> : null;
    const updateSettings = this.props.features ? <UpdateSettings /> : null;

    return (
      <Grid className="fcc1" style={{ width: '100%' }}>

        {/* Search bar */}
        <Row>
          <Col>
            <MapSearchBar />
          </Col>
        </Row>

        <Row>

          {/* Map */}
          <Col sm={8} md={8} lg={8}>
            {mapSchemaTabPane}
          </Col>

          <Col sm={4} md={4} lg={4}>
            <Grid style={{ width: '100%' }}>

              {/* Edit options */}
              <Row>
                <Col>
                  {editOptionPicker}
                </Col>
              </Row>

              {/* CSV uploader */}

              <Row>
                <Col>
                  {csvUploader}
                </Col>
              </Row>

              {/* Settings */}
              <Row>
                <Col>
                  {updateSettings}
                </Col>
              </Row>

            </Grid>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    webmapId: state.webmapId,
    fields: state.map ? state.map.layers.items[0].fields : null,
    editOption: state.editOption,
    features: state.newFeatures ? state.newFeatures : null,
  };
}

export default connect(mapStateToProps)(FeatureCreatorContainer);