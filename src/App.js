import React, { Component } from 'react';
import AddItems from './components/AddItems/AddItems';
import TodoItems from './components/ListToDoNote';
import './App.css'
class App extends Component {
  state = {
    items: [
      { id: 0, note: "Deena",  complete:false },
      { id: 1, note: "sereen",complete:false  },
      { id: 2, note: "text", complete:false  },
    ],
  };
  addItem = (item) => {
    let { items } = this.state;
    item.id = this.state.items[items.length - 1].id ;
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
      console.log(prev.items[id]);
      return prev;
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
          lineThrough={this.state.complete}
        />
      </div>
    );
  }
}

export default App;
