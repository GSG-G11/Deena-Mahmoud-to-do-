import React, { Component } from 'react';
import './ListToDoNote.css';

class TodoItems extends Component {
  state = {
    isEdit: false,
    id: 0,
  };
  displayForm = (e) => {
    this.setState({ isEdit: !this.state.isEdit, id: e.target.id });
  };
  render() {
    const { items, deleteItem, isCompleted, handleEdit } = this.props;
    return (
      <>
        {this.state.isEdit ? (
          <form className='edit-form' onSubmit={(e) => handleEdit(e)} id={this.state.id}>
            <input
              type="text"
              placeholder="Edit Note ..."
              className="todo-input"
              id="note"
              onChange={this.handleChange}
              value={this.state.note}
            />
            <input className="add" type="submit" value="Edit" />
          </form>
        ) : null}
        {items.length ? (
          items.map((item) => (
            <div key={item.id} id={item.id} className="note">
              <span
                id={item.id}
                onClick={() => {
                  isCompleted(item.id);
                }}
                style={{
                  textDecoration: item.complete ? 'line-through ' : 'none',
                  color: item.complete ? 'red ' : 'black',
                }}
              >
                {item.note}
              </span>
              <div className="btn">
               
                <button className="delete" onClick={() => deleteItem(item.id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button
                  className="edit"
                  id={item.id}
                  onClick={this.displayForm}
                >
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-note">there is no item to show</p>
        )}
      </>
    );
  }
}

export default TodoItems;
