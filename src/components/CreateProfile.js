// import React from 'react';

// export default class CreateProfile   extends React.Component {
//   state = { 
//     firstName: " ", 
//     lastName: " ",
//     userName: " ",
//     email: " ",
//     password: " ",
//   }

//   change = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   onSubmit = () => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       firstName: " ", 
//       lastName: " ",
//       userName: " ",
//       email: " ",
//       password: " ",

//     })
//   };
   
//   render() {
//     return (
//       <form>
//         <input 
//         name='firstName'
//         placeholder='First Name'
//          value={this.state.firstName} 
//          onChange={e => this.change(e)} 
//          />
//          <br/>
//         <input 
//         name='lastName'
//         placeholder='lastName'
//          value={this.state.lastName} 
//          onChange={e => this.change(e)} 
//          />
//          <br/>
//         <input 
//         name='username'
//         placeholder='Username' 
//         value={this.state.username} 
//         onChange={e => this.change(e)} 
//         />
//         <br/>
//         <input 
//         name='email'
//         placeholder='email' 
//         value={this.state.email} 
//         onChange={e => this.change(e)} 
//         />
//         <br/>
//         <input 
//         name='password'
//         type='password'
//         placeholder='password' 
//         value={this.state.password} 
//         onChange={e => this.change(e)} 
//         />
//         <br/>
//         <button onClick={e => this.onSubmit(e)}>Submit</button>
//       </form>
//     );
//   }
// }
