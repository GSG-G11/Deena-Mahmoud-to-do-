import React, { Component } from "react";
import "./AddItems.css";
class AddItems extends Component {
  state = {
    note: "",
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      note: "",
    });
  };
  render() {
    console.log(this.state.note);
    return (
      <div className="form-container">
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            placeholder="Add Note ..."
            className="todo-input"
            id="note"
            onChange={this.handleChange}
            value={this.state.note}
          />
          <input className="add" type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddItems;
