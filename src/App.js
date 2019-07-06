import React from 'react';
import './App.css';
import List from "./js/components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/chats.scss'

class App extends React.Component {
  render () {
   return (
     <div>
       <main>
         <List messages={this.props.messages}/>
       </main>
    </div>
   )
  }
}
export default App;
