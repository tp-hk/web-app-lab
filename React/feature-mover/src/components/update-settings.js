import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';

class UpdateSettings extends ComponentBase {

  render() {
    return (

      <SettingContainer
        title="Feature creation settings"
      >
        <input type='text'></input>
      </SettingContainer>
    )
  }
}

export default UpdateSettings;