import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import TopPage from './pages/TopPage'
import Header from './Components/Header';


function App() {
  return (
<Router>
  <Header />
  <Switch>
    <Route exact path='/' component={TopPage}/>
  </Switch>
</Router>    
  );
}

export default App;
