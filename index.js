import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(

  <Router>
   <body>

   <div>
    <h1>Welcome To React</h1>
    <p>React is a JavaScript library for building user interfaces.<br/>

      React is used to build single-page applications.<br/>

      React allows us to create reusable UI components.<br/>

</p>
   </div>

   <nav>
    <a href="/">Home</a> <br/>
    <a href="/about">About</a> <br/>
    <a href="/contact">Contact</a> <br/>
   </nav>

   

   </body>
  </Router>,
  
  document.getElementById('root')
);
