import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';
class SignUp extends Component {
    constructor(props) {

        super(props);

        this.state = {

        }
    }

    signup = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        axios.post('http://cvhunt.com/API/signupinfo', {
                username: username,
                password: password,
                email: email,
                usertype: '1'
            })
            .then(function(response) {
                console.log(response);
                if (response.data.message) { 
                  alert(response.data.message); 
                }
                if (response.data.errorMsg) { 
                  alert(response.data.errorMsg); 
                }

            })
            .catch(function(error) {
                console.log(error);
            });

    }

render() {
        return (
                <div>
         <div className="signupform">
         <h2 className="heading">SignUp....</h2>
          <table className="table">
            <tr>
              <td>Username</td>
              <td><input type="text" ref="username" /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="email" ref="email" /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" ref="password" /></td>
            </tr>
            
            <tr>            
              <td><button onClick={this.signup}>Login</button></td>
            </tr>

          </table>
         </div>
      </div>
    );
}
}

export default SignUp;

