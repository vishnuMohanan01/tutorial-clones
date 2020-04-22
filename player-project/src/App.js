import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/home.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import AuthContextProvider from "./auth";
import PrivateRoute from "./privateroute.js";
// import BookList from "./componenthook/booklist.js";
// import ThemeToggle from "./componenthook/ThemeToggle.js";
// import ThemeContextProvider from "./ThemeContext.js";
// import AuthContextProvider from "./AuthContext.js";
// import SongList from "./componentshook2/SongList.js";






// function App() {
//   return (
//     <div>
//       <SongList />
//     </div>
//   );
// }


const App = () => {
  return (
    <AuthContextProvider>
    <Router>
      <div>
        <PrivateRoute component = {Home} exact path = "/"  />
        <Route component = {Login} exact path = "/login"  />
        <Route component = {Signup} exact path = "/signup"  />
      </div>
    </Router>
    </AuthContextProvider>
    );
  };
        // context tutorial
        // <div>
        // <ThemeContextProvider>
        // <AuthContextProvider>
        // <BookList />
        // <ThemeToggle />
        // </AuthContextProvider>
        // </ThemeContextProvider>
        // </div>

export default App;
