import React, { Component } from "react";

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
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            placeholder="Add Note ..."
            id="note"
            onChange={this.handleChange}
            value={this.state.note}
          />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddItems;
