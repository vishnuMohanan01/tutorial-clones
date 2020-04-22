import React from "react";
import app from "../firebase.js";


const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <button onClick = {() => app.auth().signOut()}> Sign Out </button>
    </div>
  );
};


export default Home;
