import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newItem:"",
      list:[]
     }
  }
  render() { 
    return ( <div className="App">

           <div>
            Add an Item Here:
            <br></br>
            <input  type="text" value={this.state.newItem} placeholder="Lets do it!"></input>

          </div>
    </div>  );
  }
}
 
export default App;