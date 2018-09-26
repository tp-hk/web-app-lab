import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class UpdateSettings extends ComponentBase {

  render() {
    return (

      <SettingContainer
        title="Feature creation settings"
      >
        <Grid>

        </Grid>
      </SettingContainer>
    )
  }
}

export default UpdateSettings;