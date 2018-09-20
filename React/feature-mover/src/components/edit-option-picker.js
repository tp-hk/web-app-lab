import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import { connect } from 'react-redux';
import {
  Button
} from 'react-bootstrap';

import { setEditOption } from '../actions/index';

class EditOptionPicker extends ComponentBase {
  render() {
    if (!this.props.fields) {
      return null;
    } else {
      return (<SettingContainer
        title="Edit option"
        subTitle="Choose to update existing features or create new features"
      >
        <div>
          <Button bsStyle='primary' onClick={() => {
            this.props.setEditOption('create');
          }}>
            Create Features
        </Button>
          <Button bsStyle='primary' onClick={() => {
            this.props.setEditOption('update');
          }}>
            Update Features
        </Button>
        </div>
      </SettingContainer>)
    }
  }
}

function mapStateToProps(state) {
  return {
    fields: state.map ? state.map.layers.items[0].fields : null,
  };
}

// export default EditOptionPicker;
export default connect(mapStateToProps, { setEditOption })(EditOptionPicker);