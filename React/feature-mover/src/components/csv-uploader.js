import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import {FormControl, Label} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../style/csv-uploader.css';

class CsvUploader extends ComponentBase {
  constructor () {
    super ();
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.fields;
  }

  render () {
    if (!this.props.fields) {
      return null;
    }

    return (
      <SettingContainer
        title="Upload CSV"
        subTitle="Upload the CSV with the attributes"
      >
        <div>
          <h4>
            <input type="file" id="file" className="file-picker" />
            <Label style={{cursor: 'pointer'}}>
              Choose File
            </Label>
          </h4>
        </div>
      </SettingContainer>
    );
  }
}

function mapStateToProps (state) {
  return {
    fields: state.map ? state.map.layers.items[0].fields : null,
  };
}

export default connect (mapStateToProps) (CsvUploader);
