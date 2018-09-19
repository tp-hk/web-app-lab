import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import {FormControl, Label} from 'react-bootstrap';
import {connect} from 'react-redux';
import {uploadNewAttributes} from '../actions/index';
import '../style/csv-uploader.css';

class CsvUploader extends ComponentBase {
  constructor () {
    super ();

    this._bind ('handleFileChange');
  }

  handleFileChange (evt) {
    // TODO: app ignores if file with the same name is re-uploaded
    if (
      !evt.target.files ||
      evt.target.files.length === 0 ||
      !evt.target.files[0]
    )
      return;

    const file = evt.target.files[0];
    const reader = new FileReader ();

    reader.readAsText (file);
    const content = reader.result;

    console.log (content);

    this.props.uploadNewAttributes (content);
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
        <h4>
          <input
            type="file"
            id="file"
            accept="text/csv"
            className="file-picker"
            onChange={this.handleFileChange}
          />
          <Label style={{cursor: 'pointer'}}>
            Choose File
          </Label>
        </h4>
      </SettingContainer>
    );
  }
}

function mapStateToProps (state) {
  if (state.newFeatures)
    console.log (`received new features: ${state.newFeatures}`);

  return {
    fields: state.map ? state.map.layers.items[0].fields : null,
    newFeatures: state.newFeatures,
  };
}

export default connect (mapStateToProps, {uploadNewAttributes}) (CsvUploader);
