import React, {useCallback, useState} from "react";
import {withRouter} from "react-router-dom";   //might need correction
import app from "../firebase.js";


const Signup = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = useCallback(
    async event => {
      event.preventDefault();
      try {
        console.log(email);
	const actionCodeSettings = {
		url: 'https:localhost:3000/login',
  		handleCodeInApp: true,
  		iOS: {
    			bundleId: 'com.example.ios'
  		},
  		android: {
    			packageName: 'com.example.android',
    			installApp: true,
    			minimumVersion: '12'
  		},
  		dynamicLinkDomain: 'example.page.link'
	};
        await app.auth().createUserWithEmailAndPassword(email.trim(), password);
	app.auth().sendSignInLinkToEmail(email.trim(), actionCodeSettings);
        history.push("/");
      }
      catch(error) {
        alert(error);
      }
    },
  [history, email, password]);


  return (
    <form onSubmit = {handleSignup}>
      <div>
      <label>Email: </label>
      <input type = "text" placeholder = "Email" onChange = {(e) => {setEmail(e.target.value)}}/>
      </div>
      <div>
      <label>Password: </label>
      <input type = "password" placeholder = "Password" onChange = {(e) => {setPassword(e.target.value)}}/>
      </div>
      <input type = "submit" />
    </form>
  );
};



export default withRouter(Signup);
