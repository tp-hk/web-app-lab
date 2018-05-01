import React from 'react';
import BaseComponent from "./base-component";

class DataInput extends BaseComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="file" style={{margin: 'auto 5px'}}>{this.props.title}</label>
          <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange} />
        </div>
      </form>
    );
  };
}

export default DataInput;

const SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");