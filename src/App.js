import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Login from './component/login';
import ViewClaim from './component/view_claim';
import UpdateClaim from './component/update_claim';
import Adduser from './component/adduser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/viewclaim" component={ViewClaim}/>
          <Route exact path="/updateclaim/:id" component={UpdateClaim}/>
          <Route exact path="/adduser" component={Adduser}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
