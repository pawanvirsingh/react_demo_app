{/*import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
      );
   }
}

export default App;


import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default App;
Multi line comment...*/}

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
      
//       this.state = {
//          data: 
//          [
//             {
//                "id":1,
//                "name":"Foo",
//                "age":"20"
//             },
            
//             {
//                "id":2,
//                "name":"Bar",
//                "age":"30"
//             },
            
//             {
//                "id":3,
//                "name":"Baz",
//                "age":"40"
//             }
//          ]
//       }
//    }
   
//    render() {
//       return (
//          <div>
//             <Header/>
//             <table>
//                <tbody>
//                   {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
//                </tbody>
//             </table>
//          </div>
//       );
//    }
// }

// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }

// class TableRow extends React.Component {
//    render() {
//       return (
//          <tr>
//             <td>{this.props.data.id}</td>
//             <td>{this.props.data.name}</td>
//             <td>{this.props.data.age}</td>
//          </tr>
//       );
//    }
// }

// export default App;


// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          header: "Header from state...",
//          Content: "Content from state..."
//       }
//    }
   
//    render() {
//       return (
//          <div>
//             <h1>{this.state.header}</h1>
//             <h2>{this.state.Content}</h2>
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
         header: "Header from props...",
         "content": "Content from props..."
      }
   }
   
   render() {
      return (
         <div>
            <Header heade = {this.state.header}/>
            <Content conten= {this.state.content}/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.heade}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.conten}</h2>
         </div>
      );
   }
}

export default App;