import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Contact } from './Contact';

export const Routes = () => {

  return (
    <div>
      <NavBar />
      <Switch>
      
      <Route exact path="/Home" component={Home} />
         <Route exact path="/">
          <Redirect to="/Home" />
           </Route>
        
      <Route exact path="/About" component={About} />
        
     <Route exact path="/Contact" component={Contact} />
        
      </Switch>
      
    </div>
    
  );
};
