import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {

  const alias = useSelector(state => state.profile.alias);

  return (
    <div>
      <h1>Välkommen {alias}</h1>

      <Counter />
      <Counter />
      <Counter />
      <Profile />
    </div>
  );
}

export default App;
