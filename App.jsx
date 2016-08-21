// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
		
//       this.state = {
//          data: []
//       }
	
//       this.setStateHandler = this.setStateHandler.bind(this);
//    };

//    setStateHandler() {
//       var item = "setState..."
//       var myArray = this.state.data;
//       myArray.push(item)
//       this.setState({data: myArray})
//    };

//    render() {
//       return (
//          <div>
//             <button onClick = {this.setStateHandler}>SET STATE</button>
//             <h4>State Array: {this.state.data}</h4>{"\n"}
//          </div>
//       );
//    }
// }

// export default App;


import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         name: 'pawan'
      }
   }
   
   console.log("pawanvir singh");
   render() {
      setTimeout(() => {this.setState({name : "pawanvir singh"});},1000)

      return (
         <div>
         <h1> {this.state.name}</h1>
            
         </div>
      );

   }

}



export default App;