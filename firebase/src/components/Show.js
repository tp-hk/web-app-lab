import React, { Component } from "react";
import firebase, { path } from "../index";

class Show extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.database().ref(path);
    this.state = {
      note: null,
      key: "",
      draft: "",
      isDeleted: false,
      isEditing: false,
    };
    this.lastSavedValue = "";
  }

  async componentDidMount() {
    const key = this.props.match.params.id;
    const ref = firebase.database().ref(`${path}/${key}`);

    const data = await ref.get();
    if (!data.exists()) {
      return;
    }

    const note = data.val();
    this.setState({
      note,
      key,
      draft: note["TEST"],
      isLoading: false,
    });

    this.lastSavedValue = note["TEST"];
  }

  handleDelete = async () => {
    const ref = firebase.database().ref(`${path}/${this.state.key}`);
    await ref.remove();

    this.setState({
      isDeleted: true,
      isEditing: false,
    });
    this.props.history.push("/");
  };

  handleInputChanged = (event) => {
    this.setState({
      draft: event.target.value,
    });
  };

  handleEdit = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleSave = () => {
    const ref = firebase.database().ref(`${path}/${this.state.key}`);
    ref.set({
      TEST: this.state.draft || new Date().toString(),
    });
    this.setState({
      isEditing: false,
    });
    this.lastSavedValue = this.state.draft;
    this.props.history.push("/");
  };

  handleCancel = () => {
    this.setState({
      isEditing: false,
      draft: this.lastSavedValue,
    });
  };

  render() {
    const { note, isEditing, isDeleted } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Edit Note</h3>
          </div>
          {!note && <h3>Note not found</h3>}
          {isDeleted ? (
            <h3>Deleted</h3>
          ) : isEditing ? (
            <div class="panel-body">
              <input
                style={{ height: "40px", width: "800px" }}
                onChange={this.handleInputChanged}
                value={this.state.draft}
              />
              <div style={{ marginTop: "20px" }}>
                <button onClick={this.handleSave} class="btn btn-success">
                  Save
                </button>
                &nbsp;
                <button onClick={this.handleCancel} class="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div class="panel-body">
              <span>{note ? note["TEST"] : ""}</span>
              <div style={{ marginTop: "20px" }}>
                <button onClick={this.handleEdit} class="btn btn-success">
                  Edit
                </button>
                &nbsp;
                <button onClick={this.handleDelete} class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Show;
