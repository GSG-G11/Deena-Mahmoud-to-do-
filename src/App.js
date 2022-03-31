import React, { Component } from 'react';
import AddItems from './components/AddItems/AddItems';
import TodoItems from './components/ListToDoNote';
import './App.css';
class App extends Component {
  state = {
    items: [
      { id: 0, note: 'Shopping from market', complete: false, isEdit: false },
      { id: 1, note: 'Revision  react subjects', complete: false, isEdit: false  },
      { id: 2, note: 'Going to the gym', complete: false, isEdit: false  },
    ],
  };
  addItem = (item) => {
    let { items } = this.state;
    item.id = this.state.items.length ;
    item.complete = false;
    items.push(item);
    this.setState(items);
  };

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  isCompleted = (id) => {
    this.setState((prev) => {
      prev.items[id].complete = true;
      return prev;
    });
  };
  handleEdit = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return {items: prev.items.map((el) => {
        console.log(e.target.id);
        // eslint-disable-next-line eqeqeq
        if(el.id == e.target.id){
          const updated = { id: el.id, note: e.target.elements[0].value , complete: el.complete, isEdit: el.isEdit }
          return updated;
        }else {
          return el;
        }
      })}
    })
  }

  render() {
    return (
      <div className="App">
        <h1>What's the Plan for Today?</h1>
        <AddItems addItem={this.addItem} />
        <TodoItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          isCompleted={this.isCompleted}
          handleEdit ={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
