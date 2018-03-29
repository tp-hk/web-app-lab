import React from 'react';
import ComponentBase from './component-base';
import {Well, Table, thead, tr, th, tbody, td} from 'react-bootstrap';
import {connect} from 'react-redux';

class SchemaTable extends ComponentBase {
  constructor (props) {
    super (props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.fields;
  }

  render () {
    if (!this.props.fields) {
      return null;
    } else {
      const rows = this.props.fields.map (field => {
        const {name, type, nullable, length} = field;

        if (type === 'oid') {
          // skip the field when trying to create new features
          return null;
        }

        return (
          <tr key={name}>
            <td style={{fontWeight: 'bold'}}>{name}</td>
            <td>{type}</td>
            <td>{nullable ? 'yes' : 'no'}</td>
            <td>{length === -1 ? 'N/A' : length}</td>
          </tr>
        );
      });

      return (
        <div>
          <h3>Layer schema</h3>
          <span className="small">
            Create a csv file with the following fields. Fill out the file with attributes
          </span>
          <Table striped condensed hover>
            <thead>
              <tr>
                <th>Field name</th>
                <th>Field type</th>
                <th>Can be empty?</th>
                <th>Length (char)</th>
              </tr>
              {rows}
            </thead>
          </Table>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    fields: state.map ? state.map.layers.items[0].fields : null,
  };
}

// export default SchemaTable;
export default connect (mapStateToProps) (SchemaTable);
