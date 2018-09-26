import React from 'react';
import ComponentBase from './component-base';
import SettingContainer from './setting-container';
import SchemaTable from './schema-table';
import { Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadNewAttributes } from '../actions/index';
import '../style/csv-uploader.css';

class CsvUploader extends ComponentBase {

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

      console.log(content);

      this.props.uploadNewAttributes(content);

    }
    reader.readAsText(file);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.fields)
      return false;

    return this.props.editOption !== nextProps.editOption;
  }

  render() {
    if (!this.props.editOption) {
      return null;
    }

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
          <Label style={{ cursor: 'pointer' }}>
            Choose File
          </Label>
        </h4>

        <SchemaTable />
      </SettingContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    fields: state.map ? state.map.layers.items[0].fields : null,
    newFeatures: state.newFeatures,
    editOption: state.editOption
  };
}

export default connect(mapStateToProps, { uploadNewAttributes })(CsvUploader);
