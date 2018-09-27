import React from 'react';
import SettingContainer from './setting-container';
import {
  ButtonGroup,
  Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setEditOption } from '../actions/index';

function EditOptionPicker(props) {
  return (<SettingContainer
    title='Edit option'
  >
    <ButtonGroup>
      <Button bsStyle='primary' onClick={() => {
        props.setEditOption('create');
      }}>
        Create Features
    </Button>
      <Button bsStyle='primary' onClick={() => {
        props.setEditOption('update');
      }}>
        Update Features
    </Button>
    </ButtonGroup>
  </SettingContainer>)
}

export default connect(null, { setEditOption })(EditOptionPicker);