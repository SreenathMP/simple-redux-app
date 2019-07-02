import React from 'react';
import './App.css';
import List from "./js/components/List";
import Form from "./js/components/Form";


function App() {
  return (
    <div className="container">
       <h2>Articles</h2>
      <List />
        <h2>Add a new article</h2>
      <Form />
    </div>
   );
}

export default App;
