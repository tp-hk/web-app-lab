import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
// import SchemaTable from './schema-table';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadFeatures } from '../actions/index';
import * as csv from 'csvtojson';
import '../style/csv-uploader.css';

class CsvUploader extends ComponentBase {

  _validateFieldNames = (layerFieldNames, features) => {
    // validation fails if csv is empty
    if (!features || features.length === 0)
      return false;

    // validation fails if number of fields don't match
    const csvFieldNames = Object.keys(features[0]).sort((a, b) => a - b).map(f => f.toLowerCase());
    if (csvFieldNames.length !== layerFieldNames.length)
      return false;

    // validation fails if field names don't match
    layerFieldNames = layerFieldNames.sort((a, b) => a - b).map(f => f.toLowerCase());
    for (let layerField of layerFieldNames) {
      if (!csvFieldNames.includes(layerField))
        return false;
    }
    return true;
  }

  handleFileChange = (evt) => {
    // TODO: app ignores if file with the same name is re-uploaded
    if (
      !evt.target.files ||
      evt.target.files.length === 0 ||
      !evt.target.files[0]
    )
      return;

    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {

      const content = reader.result;

      // convert csv into JSON
      csv({
        noheader: false
      })
        .fromString(content)
        .then(_features => {

          if (!this._validateFieldNames(this.props.layerFieldNames, _features)) {
            alert('Field names do not match the schema, or file has no data. Please check.');
            return;
          }

          const features = {};
          for (let index in _features)
            features[index] = _features[index];

          this.props.loadFeatures(features);
        });
    }
    reader.readAsText(file);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (!nextProps.layerFields)
    //   return false;

    return this.props.editOption !== nextProps.editOption;
  }

  render() {
    let subTitle = 'Upload a CSV file with the following fields. Fill out the file with attributes. ';
    subTitle += this.props.editOption === 'create' ? 'A new feature will be created for each row' : 'Each row will be used to update a selected feature'

    return (
      <SettingContainer
        title='Upload CSV'
        subTitle={subTitle}
      >
        <h4>
          <input
            type='file'
            id='file'
            accept='text/csv'
            className='file-picker'
            onChange={this.handleFileChange}
          />
          <Button bsStyle='primary'>
            Choose File
          </Button>
        </h4>

        {/* 
        removing schema table temporarily to implement a map/table view
        <SchemaTable /> 
        */}
      </SettingContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    layerFieldNames: state.map ? state.map.layers.items[0].fields.map(f => f.name) : null,
    newFeatures: state.newFeatures
  };
}

export default connect(mapStateToProps, { loadFeatures })(CsvUploader);
