import React, { Component } from "react";
import firebase, { path } from "../index";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.database().ref(path);
    this.state = {
      description: "",
    };
  }

  onChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { description } = this.state;

    try {
      const result = await this.ref.push({
        TEST: description || new Date().toString(),
      });
      this.setState({
        description: "",
      });
      this.props.history.push("/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  render() {
    const { description } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Note</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/" class="btn btn-primary">
                List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="description">Description:</label>
                <input
                  class="form-control"
                  onChange={this.onChange}
                  value={this.state.description}
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
