// import React, { Component } from 'react'


// import FormInput from '../form-input/form-input.component'
// import CustomButton from '../custom-button/custom-button.component'
// import { signInWithGoogle, auth } from '../../firebase/firebase'
// import './login.styles.scss'

// class Login extends Component {
//     constructor(){
//         super()
//         this.state = {
//             email: '',
//             password: '',
//         }
//     }

//     handleChange = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
    
//     handleSubmit = async (e) => {
//         e.preventDefault()
//         const {email, password} = this.state

//         try{
//             await auth.signInWithEmailAndPassword(email, password)
//             this.setState({email: '', password: ''})
//         } catch(err){
//             console.log(err.message)
//         }
//     }
    
//     render() {

//         return (
//           <div className="login">
//             <h1>Login</h1>

//             <form className="login__form"  onSubmit={this.handleSubmit}>
//                 <FormInput
//                 name="email"
//                 label="email"
//                 value={this.state.email}
//                 type="email"
//                 handleChange={this.handleChange}
//                 required
//                 />

//                 <FormInput
//                 type="password"
//                 name="password"
//                 value={this.state.password}
//                 handleChange={this.handleChange}
//                 label="password"
//                 required
//                 />
//                 <CustomButton>Log in</CustomButton>
//                 <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Log in with google</CustomButton>
//             </form>

//           </div>
//         );
//     }
// }

// export default Login 

import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase';

// import './sign-in.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;