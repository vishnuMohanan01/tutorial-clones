import React, {useCallback, useContext, useState} from "react";
import {withRouter, Redirect} from "react-router-dom";   //might need correction
import app from "../firebase.js";
import {AuthContext} from "../auth.js";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app.auth().signInWithEmailAndPassword(email.trim(), password);
        history.push("/");
      }
      catch(error) {
        alert(error);
      }
    },
  [history, email, password]);

  const {currentuser} = useContext(AuthContext);

  if (currentuser){
    return <Redirect to = "/" />
  }

  return (
    <div>
    <h1>Login</h1>
    <form onSubmit = {handleLogin}>
      <div>
      <label>Email: </label>
      <input type = "text" placeholder = "Email" onChange = {(e) => {setEmail(e.target.value)}}/>
      </div>
      <div>
      <label>Password: </label>
      <input type = "password" placeholder = "Password" onChange = {(e) => {setPassword(e.target.value)}} />
      </div>
      <input type = "submit" />
    </form>
    </div>
  );
};



export default withRouter(Login);
