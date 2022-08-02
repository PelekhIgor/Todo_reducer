

import Layout from "./components/layouttodo";
import React, {useReducer} from "react";
import {Context} from "./context";
import {reducer} from "./store/reducer";
import {initialState} from "./store/state";

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
      <Context.Provider value={{state, dispatch}}>
        <Layout></Layout>
      </Context.Provider>
  );
}

export default App;
