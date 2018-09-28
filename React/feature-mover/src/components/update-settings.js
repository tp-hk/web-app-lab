import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import {
  Grid,
  Row,
  Col,
  FormControl,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import '../style/update-settings.css';

class UpdateSettings extends ComponentBase {
  constructor(props) {
    super(props);

    this.state = {
      updateInterval: 0.5
    }
  }

  handleIntervalChange = (evt) => {
    evt.preventDefault();

    const interval = parseFloat(evt.target.value);

    // do nothing if not a number
    if (Number.isNaN(interval))
      return;

    let newState = interval;

    // round to 1 d.p. if float 
    if (!Number.isInteger(interval))
      newState = interval.toFixed(1);

    this.setState({
      updateInterval: newState
    });
  }

  render() {
    return (

      <SettingContainer
        title='Feature creation settings'
      >
        <Grid id='update-settings-table'>
          <Row>
            <Col xs={5} md={4}>Create/update interval</Col>
            <Col xs={7} md={8}>
              <span>Every</span>
              <FormControl
                style={{ width: '50%', display: 'inline-block' }}
                type='text'
                value={this.state.updateInterval}
                onChange={this.handleIntervalChange} />
              <span>min</span>
            </Col>
          </Row>

          <Row>
            <Col xs={5} md={4}><span>Looping</span></Col>
            <Col xs={7} md={8}>
              <ButtonGroup>
                <Button bsStyle='primary'>
                  Yes
                </Button>
                <Button bsStyle='primary'>
                  No
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
      </SettingContainer >
    )
  }
}

export default UpdateSettings;