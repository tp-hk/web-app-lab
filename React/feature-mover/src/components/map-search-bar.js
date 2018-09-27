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
  Col,
} from 'react-bootstrap';
import '../style/mapId-search-bar.css';
import { connect } from 'react-redux';
import { searchWebmap } from '../actions/index';

class MapSearchBar extends ComponentBase {
  constructor(props) {
    super(props);

    this.state = {
      webmapId: '',
    };
  }

  handleWebmapIdChange = (evt) => {
    evt.preventDefault();

    this.setState({
      webmapId: evt.target.value,
    });
  }

  handleSearchClick = (evt) => {
    evt.preventDefault();
    // console.log('searching ' + this.state.webmapId);
    this.props.searchWebmap(this.state.webmapId);
  }

  render() {
    const tooltipMessage = (
      <Tooltip id='map-requirement-tooltip'>
        The webmap and the feature layer must be shared to the public. If multiple layers exist in the map, the first one will be used. The layer must allow updating and adding features.
      </Tooltip>
    );

    return (
      <Form horizontal className='mapId-input-form'>
        <FormGroup controlId='webmapId'>
          <Col componentClass={ControlLabel} sm={4}>
            <div>
              <OverlayTrigger placement='bottom' overlay={tooltipMessage}>
                <span className='has-tooltip' style={{ fontWeight: 'initial' }}>
                  Enter ArcGIS Online webmap ID <Badge>?</Badge>
                </span>
              </OverlayTrigger>
            </div>
          </Col>
          <Col sm={4}>
            <FormControl
              type='text'
              value={this.state.webmapId}
              onKeyPress={event => { if (event.keyCode === 13) this.handleSearchClick(); }}
              onSubmit={this.handleSearchClick}
              onChange={this.handleWebmapIdChange}
              placeholder='55cdda503e054b2a8b4967c716ecd42e'
            />
          </Col>
          <Button bsStyle='primary' style={{ top: 0 }} onClick={this.handleSearchClick}>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(null, { searchWebmap })(MapSearchBar);
