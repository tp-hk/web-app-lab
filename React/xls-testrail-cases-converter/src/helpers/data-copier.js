import XLSX from 'xlsx';

class DataCopier {

  constructor(workbook) {
    this.workbook = workbook;
  }

  _extractData(sheetNamesArr, mappingColumn, dataColumn) {
    if (sheetNamesArr.length === 0 || !dataColumn)
      return;

    // for each sheet, go through each row, add mapping key and the data to dataObject
    let dataObject = {};

    sheetNamesArr.forEach(wsname => {
      let ws = this.workbook.Sheets[wsname];

      let row = 1;
      let dataCellId = dataColumn + row;
      let mappingCellId = mappingColumn + row;

      while (ws[dataCellId] && ws[mappingCellId]) {
        // get the data
        let data = ws[dataCellId]['f'];  //'f' is the formatted URL
        data = this._cleanupUrl(data);

        // get the mapping key
        let mappingCell = ws[mappingCellId]['v']  // 'v' is the raw value

        // push into the dataObject
        dataObject[mappingCell] = data;

        dataCellId = dataColumn + (++row);
        mappingCellId = mappingColumn + (++row);
      }
    });

    return dataObject;
  }

  _extractTargetData(targetSheetName, tagretColumn) {

  }

  _cleanupUrl(dataRaw) {
    if (dataRaw.startsWith('Image("'))
      dataRaw = dataRaw.substring(7);
    if (dataRaw.endsWith('")')) {
      const startIndex = dataRaw.indexOf('")');
      dataRaw = dataRaw.substring(0, startIndex);
    }

    return dataRaw;
  }

  appendData(sourceSheetsNames, dataColumn, sourceMappingColumn, targetSheetName, tagretColumn, targetMappingColumn) {

    let srcData = this._extractData(sourceSheetsNames, sourceMappingColumn, dataColumn);

    const targetSheetNames = [targetSheetName];
    let targetData = this._extractData(targetSheetNames, targetMappingColumn, tagretColumn);

    console.log(targetSheetNames);
  }



}

export default DataCopier;