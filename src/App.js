import React,{ Component } from "react";
import AddItems from "./components/AddItems/AddItems";

class  App extends Component{
  state = {
    items: [
      { id: 1, note: "Deena" },
      { id: 2, note: "sereen" },
      { id: 3, note: "text" },
    ],
  };
  addItem = (item) => {
    let { items } = this.state;
    item.id = this.state.items[items.length - 1].id + 1;
    items.push(item);
    console.log(items);
    this.setState(items);
  };

  render() {
    return (
      <div className="App">
          <p>todo app</p>
        <AddItems addItem ={this.addItem} />
      </div>
    );
  }
}

export default App;
