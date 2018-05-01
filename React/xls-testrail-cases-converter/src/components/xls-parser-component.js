import React from 'react';
import BaseComponent from './base-component';
import '../style/xls-parser.css';
import DataInput from './data-input';
import XLSX from 'xlsx';
import { FormGroup, Checkbox, ControlLabel, FormControl, Well, Button } from 'react-bootstrap';

class XLSParser extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind('handleFile', 'exportFile');

    this.state = {
      tabNames: [],
      tests: []
    }
  }

  handleFile(file) {
    // Reference: https://github.com/sheetjs/js-xlsx

    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      /* Update state */
      // this.setState({ data: data, cols: make_cols(ws['!ref']) });
      console.log(`data is ${data}`);

      /* Get first worksheet */
      this.setState({
        tabNames: wb.SheetNames,
        tests: data
      });

    };

    if (rABS)
      reader.readAsBinaryString(file);
    else
      reader.readAsArrayBuffer(file);
  }

  exportFile() {
    alert('exporting file');
  }

  render() {
    return <div>
      <h4>Append Screenshot URLs to Test Cases</h4>
      <DataInput title='Browse for Excel file' handleFile={this.handleFile} />
      <Well>
          <h4>Source sheets with screenshot URLs</h4>
          <FormGroup controlId='screenshots-selector'>
          <ControlLabel>Choose the source sheets:</ControlLabel>
          {
            this.state.tabNames.map(tabName => {
              return <Checkbox key={tabName}>{tabName}</Checkbox>;
            })
          }
        </FormGroup>
        <FormGroup>
          <ControlLabel>Screenshot URLs column:</ControlLabel>
          <FormControl
            id='sc-mapping-col-src'
            type='text'
            placeholder='B'
          />  
          <ControlLabel>Mapping column:</ControlLabel>
          <FormControl
            id='sc-mapping-col-src'
            type='text'
            placeholder='A'
          />  
        </FormGroup>
        </Well>

        <Well>
          <h4>Target sheet where the screenshot URLs will append to</h4>
          <FormGroup controlId='tests-sheet-selector'>
            <ControlLabel>Choose the target sheet:</ControlLabel>
            <FormControl componentClass='select' placeholder='Choose a sheet'>
              {
                this.state.tabNames.map(tabName => {
                  return <option key={tabName} value={tabName}>{tabName}</option>;
                })
              }
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Column to append the screenshot URLs to:</ControlLabel>
            <FormControl
              id='result-col'
              type='text'
              placeholder='B'
            />
            <ControlLabel>Mapping column</ControlLabel>
            <FormControl
              id='sc-mapping-col-target'
              type='text'
              placeholder='C'
            />
          </FormGroup>
          <FormGroup>
          </FormGroup>
        </Well>
        <Button>Run</Button>
    </div>
  }
}

export default XLSParser;