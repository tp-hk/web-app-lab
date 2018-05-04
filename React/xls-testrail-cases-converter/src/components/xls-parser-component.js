import React from 'react';
import BaseComponent from './base-component';
import '../style/xls-parser.css';
import DataInput from './data-input';
import XLSX from 'xlsx';
import { FormGroup, Checkbox, ControlLabel, FormControl, Well, Button } from 'react-bootstrap';
import DataCopier from '../helpers/data-copier';

class XLSParser extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind('handleFile', 
    'handleurlSheetsSelectionChange', 
    'handleAppendURLButtonClick');

    this.state = {
      workbook: {},
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
        workbook: wb,
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

  handleAppendURLButtonClick(evt){
    // create an empty URLObject {imgName: url}
    // for each URL sheet, go through each row, add to URLObject
    // let urlObjects = {};
    // let urlSheetNames = Object.keys(this.state.srcUrlSheets);

    // urlSheetNames.forEach(wsname => {
    //   const ws = this.state.workbook.Sheets[wsname];

    //   const cols = ws['!cols'];
    //   console.log(cols);
    // });

    let dc = new DataCopier(this.state.workbook);
    dc.appendData(Object.keys(this.state.srcUrlSheets), 
    this.state.srcUrlCol, 
    this.state.srcMappingCol,
    this.state.targetSheet, 
    this.state.targetResultCol, 
    this.state.targetMappingCol);
  }

  render() {
    const sheets = this.state.workbook.SheetNames? this.state.workbook.SheetNames: [];

    return <div>
      <h4>Append Screenshot URLs to Test Cases</h4>
      <DataInput title='Browse for Excel file' handleFile={this.handleFile} />
      <Well>
          <h5>Source sheets with screenshot URLs</h5>
          <FormGroup controlId='screenshots-selector'>
          <ControlLabel>Choose the source sheets:</ControlLabel>
          {
            sheets.map(tabName => {
              return <Checkbox key={tabName} onChange={this.handleurlSheetsSelectionChange} value={tabName}>{tabName}</Checkbox>;
            })
          }
        </FormGroup>
        <FormGroup>
          <ControlLabel>Screenshot URLs column:</ControlLabel>
          <FormControl
            id='sc-mapping-col-src'
            type='text'
            placeholder='D'
            onChange={evt => {
              this.setState({
                srcUrlCol: evt.target.value
              });
            }}
          />  
          <ControlLabel>Mapping column:</ControlLabel>
          <FormControl
            id='sc-mapping-col-src'
            type='text'
            placeholder='A'
            onChange={evt => {
              this.setState({
                srcMappingCol: evt.target.value
              });
            }}
          />  
        </FormGroup>
        </Well>

        <Well>
          <h5>Target sheet where the screenshot URLs will append to</h5>
          <FormGroup controlId='tests-sheet-selector'>
            <ControlLabel>Choose the target sheet:</ControlLabel>
            <FormControl componentClass='select' placeholder='Choose a sheet' onChange={evt => {
              this.setState({
                targetSheet: evt.target.value
              });
            }}>
              {
                sheets.map(tabName => {
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
              placeholder='D'
              onChange={evt => {
                this.setState({
                  targetResultCol: evt.target.value
                });
              }}
            />
            <ControlLabel>Mapping column</ControlLabel>
            <FormControl
              id='sc-mapping-col-target'
              type='text'
              placeholder='E'
              onChange={evt => {
                this.setState({
                  targetMappingCol: evt.target.value
                });
              }}
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