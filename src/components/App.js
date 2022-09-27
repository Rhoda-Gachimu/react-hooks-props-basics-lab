import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
// import React from "react";
// import NavBar from "./NavBar";
// import Home from "./Home";
import About from "./About"
import user from "../data/user";
console.log(user);




// pass this data down as props to the child component(s) that need it!


function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New York" color="firebrick"/>
      <About bio="I made this" />
      <App/>
      

    </div>
  );
}

export default App;
