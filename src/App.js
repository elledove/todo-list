import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newItem:"",
      list:[]
     }
  }


addItem(){
  //create each todo with a unique ID. Will give a random but unique id.
  const itemId ={
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };
  // get a copy af the current list of items

  const list = [...this.state.list];

  //add new items to list.
  list.push(itemId)

  //update state with new list and reset newItem input

  this.setState = ({
    list,
    newItem:""
  })
}








  
  render() { 
    
    return ( <div className="App">

           <div>
            Add an Item Here:
            <br></br>
            <input  
            type="text" value={this.state.newItem} 
            placeholder="Lets do it!"   
            onChange={e => this.updateInput("new Item", e.target.value)}></input>
            <br></br>
            {" "}
             <button onClick={()=> this.addItem()}> ADD </button> 

          </div>
    </div>  );
  }
}
 
export default App;