import React,{ Component } from "react";

class  App extends Component{
  render() {



    
    deleteItem = (id) => {
      let items = this.state.items.filter((item) => item.id !== id);
      this.setState({ items });
    };

    isCompleted = () => {
      let isDone=!this.state.complete;
      this.setState({isDone});
    }
    return (

      <div className="App">
        <p>todo app</p>
      </div>
    );
  }
  
}

export default App;
