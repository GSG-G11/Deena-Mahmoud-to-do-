import React,{ Component } from "react";
import AddItems from "./components/AddItems/AddItems";
import TodoItems from "./components/ListToDoNote";

class  App extends Component{
  state = {
    items: [
      { id: 1, note: "Deena",  complete:false },
      { id: 2, note: "sereen",complete:false  },
      { id: 3, note: "text", complete:false  },
    ],
  };
  addItem = (item) => {
    let { items } = this.state;
    item.id = this.state.items[items.length - 1].id + 1;
    items.push(item);
    this.setState(items);
  }; 

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  isCompleted = () => {
    let isDone=!this.state.complete;
    this.setState({complete: isDone});
  }
  render() {
  return (
    <div className="App">
        <p>todo app</p>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} isCompleted={this.isCompleted}  lineThrough={this.state.items}/>
        <AddItems addItem ={this.addItem} />
    </div>
  );
  }
}

export default App;
