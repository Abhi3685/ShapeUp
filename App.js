import React from "react";
import { NativeRouter, Route, BackButton } from "react-router-native";

import Home from './components/Home';
import Mode from './components/Mode';

const App = () => {
  return (
    <NativeRouter>
      <BackButton />
      <Route exact path="/" component={Home}  />
      <Route path="/mode" component={Mode} />
    </NativeRouter>
  )
}

export default App;