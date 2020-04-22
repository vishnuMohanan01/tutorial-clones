import React, {Component, useContext} from "react";
import {ThemeContext} from "../ThemeContext.js";
import {AuthContext} from "../AuthContext.js";

// class BookList extends Component{
//   static contextType = ThemeContext;
//   render() {
//     const {isLightTheme, light, dark} = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <AuthContext.Consumer>{(authContext) => {
//         const {isAuthenticated, toggleAuth} = authContext;
//         return(
//           <div style = {{backgroud : theme.bg , color : theme.syntax}}>
//           <p>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
//             <ul>
//               <li style = {{backgroud: theme.ui}}>hello vm</li>
//               <li style = {{backgroud: theme.ui}}>hello hii</li>
//             </ul>
//             <button onClick = {toggleAuth}>{isAuthenticated ? "unAthenticate" : "Authenticate"}</button>
//           </div>
//         );
//         }
//       }
//       </AuthContext.Consumer>
//     );
//   }
// }


const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {isAuthenticated, toggleAuth} = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return(
    <div style = {{backgroud : theme.bg , color : theme.syntax}}>
    <p>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
      <ul>
        <li style = {{backgroud: theme.ui}}>hello vm</li>
        <li style = {{backgroud: theme.ui}}>hello hii</li>
      </ul>
      <button onClick = {toggleAuth}>{isAuthenticated ? "unAthenticate" : "Authenticate"}</button>
    </div>
  );
};




export default BookList;
