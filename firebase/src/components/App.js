import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { path } from "../index";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.database().ref(path);
    this.state = {
      notes: [],
    };
  }

  fetchData = async () => {
    const notes = [];
    const snapshot = await this.ref.once("value");
    const value = snapshot.val();
    if (!value) {
      return;
    }
    Object.keys(value).forEach((key) => {
      const content = value[key]["TEST"];
      notes.push({
        key,
        description: content,
      });
    });
    this.setState({
      notes,
    });
  };

  handleValueChanged = (snapshot) => {
    const notes = [];
    const value = snapshot.val();
    if (!value) {
      return;
    }
    Object.keys(value).forEach((key) => {
      const content = value[key]["TEST"];
      notes.push({
        key,
        description: content,
      });
    });
    this.setState({
      notes,
    });
  };

  async componentDidMount() {
    this.ref.on("value", this.handleValueChanged.bind(this));
    await this.fetchData();
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Univ Notes</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/create" class="btn btn-primary">
                Add
              </Link>
            </h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.notes.map(({ key, description }) => (
                  <tr>
                    <td>
                      <Link to={`/show/${key}`}>{key}</Link>
                    </td>
                    <td>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
