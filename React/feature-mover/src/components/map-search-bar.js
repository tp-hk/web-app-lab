import React from 'react';
import ComponentBase from './component-base';
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
import {connect} from 'react-redux';
import {searchWebmap} from '../actions/index';

class MapSearchBar extends ComponentBase {
  constructor (props) {
    super (props);
    this._bind ('handleWebmapIdChange', 'handleSearchClick');

    this.state = {
      webmapId: '',
    };
  }

  handleWebmapIdChange (evt) {
    evt.preventDefault ();

    this.setState ({
      webmapId: evt.target.value,
    });
  }

  handleSearchClick (evt) {
    evt.preventDefault ();
    this.props.searchWebmap (this.state.webmapId);
  }

  render () {
    const tooltipMessage = (
      <Tooltip id="map-requirement-tooltip">
        The webmap and the feature layer must be shared to the public. If multiple layers are found in the map, the first one will be used. The layer must allow updating and adding features.
      </Tooltip>
    );

    return (
      <Form horizontal className="mapId-input-form">
        <FormGroup controlId="webmapId">
          <Col componentClass={ControlLabel} smOffset={1} sm={4}>
            <div>
              <OverlayTrigger placement="bottom" overlay={tooltipMessage}>
                <span className="has-tooltip" style={{fontWeight: 'initial'}}>
                  Enter ArcGIS Online webmap ID <Badge>?</Badge>
                </span>
              </OverlayTrigger>
            </div>
          </Col>
          {' '}
          <Col sm={4}>
            <FormControl
              type="text"
              value={this.state.webmapId}
              onKeyPress={event => {
                if (event.key === 'Enter') this.handleSearchClick;
              }}
              onChange={this.handleWebmapIdChange}
              placeholder="55cdda503e054b2a8b4967c716ecd42e"
            />
          </Col>
          <Col sm={1}>
            <Button onClick={this.handleSearchClick}>Search</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default connect (null, {searchWebmap}) (MapSearchBar);
