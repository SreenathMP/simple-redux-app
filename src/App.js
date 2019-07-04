import React from 'react';
import './App.css';
import List from "./js/components/List";
import Form from "./js/components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
      <div className="container-fluid">
       <div className="topdiv"><List /></div>
    <div className="bottomdiv"><Form  /></div>
    </div>
     );
}

export default App;
