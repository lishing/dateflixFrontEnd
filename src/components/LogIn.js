// import React from 'react';

// export default class LogIn extends React.Component {
//     state = {
//         email: " ", 
//         password: " ",
//     }


// onChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value,
//     });  
//     }
// }

// onSubmit = async () => {
//     const response = await this.props.mutate({
//         variables: this.state,
//     });
//     console.log(response);
// }
// render() 
//     return (
//         <div>
//             <Input 
//             name='email'
//             placeholder='Email'
//             onChange={e => this.onChange(e)}
//             value={this.state.email}/>
//             <Input 
//             name='password'
//             placeholder='password'
//             type='password'
//             onChange={e => this.onChange(e)}
//             value={this.state.email}/>
//             <br/>
//             <Button onClick={()  => this.onSubmit()} type="primary">Login</Button>
//         </div>
//     );

//     const mutation 


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
import React, { useState } from 'react';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;

