import React from 'react';
import BaseComponent from './base-component';
import '../style/xls-parser.css';
import DataInput from './data-input';
import XLSX from 'xlsx';
import { FormGroup, Checkbox, ControlLabel, FormControl, Well, Button } from 'react-bootstrap';

class XLSParser extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind('handleFile', 
    'handleurlSheetsSelectionChange', 
    'handleURLColChange',
    'handleSrcMappingColChange', 
    'handleTargetSheetSelectionChange', 
    'handleResultColChange', 
    'handleTargetMappingColChange', 
    'handleAppendURLButtonClick', 
    'exportFile');

    this.state = {
      allSheets: [],
      srcUrlSheets: {},
      srcUrlCol: '',
      srcMappingCol: '',
      targetSheet: '',
      targetResultCol: '',
      targetMappingCol: '',
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
      // console.log(`data is ${data}`);

      /* Get first worksheet */
      this.setState({
        allSheets: wb.SheetNames,
        targetSheet: wb.SheetNames[0],
        tests: data
      });

    };

    if (rABS)
      reader.readAsBinaryString(file);
    else
      reader.readAsArrayBuffer(file);
  }

  handleurlSheetsSelectionChange(evt){
    const val = evt.target.value;
    let srcUrlSheets = this.state.srcUrlSheets;

    if(srcUrlSheets[val])
      delete srcUrlSheets[val];
    else 
    srcUrlSheets[val] = val;

    this.setState({
      srcUrlSheets
    });
  }

  handleURLColChange(evt){
    this.setState({
      srcUrlCol: evt.target.value
    });
  }

  handleSrcMappingColChange(evt){
    this.setState({
      srcMappingCol: evt.target.value
    });
  }

  handleTargetSheetSelectionChange(evt){
    this.setState({
      targetSheet: evt.target.value
    });
  }

  handleResultColChange(evt){
    this.setState({
      targetResultCol: evt.target.value
    });
  }

  handleTargetMappingColChange(evt){
    this.setState({
      targetMappingCol: evt.target.value
    });
  }

  handleAppendURLButtonClick(evt){
    console.log('button click');
  }

  exportFile() {
    alert('exporting file');
  }

  render() {
    return <div>
      <h4>Append Screenshot URLs to Test Cases</h4>
      <DataInput title='Browse for Excel file' handleFile={this.handleFile} />
      <Well>
          <h5>Source sheets with screenshot URLs</h5>
          <FormGroup controlId='screenshots-selector'>
          <ControlLabel>Choose the source sheets:</ControlLabel>
          {
            this.state.allSheets.map(tabName => {
              return <Checkbox key={tabName} onChange={this.handleurlSheetsSelectionChange} value={tabName}>{tabName}</Checkbox>;
            })
          }
        </FormGroup>
        <FormGroup>
          <ControlLabel>Screenshot URLs column:</ControlLabel>
          <FormControl
            id='sc-mapping-col-src'
            type='text'
            placeholder='B'
            onChange={this.handleURLColChange}
          />  
          <ControlLabel>Mapping column:</ControlLabel>
          <FormControl
            id='sc-mapping-col-src'
            type='text'
            placeholder='A'
            onChange={this.handleSrcMappingColChange}
          />  
        </FormGroup>
        </Well>

        <Well>
          <h5>Target sheet where the screenshot URLs will append to</h5>
          <FormGroup controlId='tests-sheet-selector'>
            <ControlLabel>Choose the target sheet:</ControlLabel>
            <FormControl componentClass='select' placeholder='Choose a sheet' onChange={this.handleTargetSheetSelectionChange}>
              {
                this.state.allSheets.map(tabName => {
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
              onChange={this.handleResultColChange}
            />
            <ControlLabel>Mapping column</ControlLabel>
            <FormControl
              id='sc-mapping-col-target'
              type='text'
              placeholder='C'
              onChange={this.handleTargetMappingColChange}
            />
          </FormGroup>
          <FormGroup>
          </FormGroup>
        </Well>
        <Button onClick={this.handleAppendURLButtonClick}>Run</Button>
    </div>
  }
}

export default XLSParser;