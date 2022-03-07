import React from "react"
import './App.css';

function App() {
  const [message, setMessage] = React.useState(["a", "b"])
  
  // let text 
  // if(message.length > 0 && "s"){
  //   text = <p>You have {message.length} unread messages</p>
  // }

  // else{
  //   text = <p>You're all caught up!</p>
  // }

  return (
    <div className="" >
       {
         message.length === 0 ? <h1>You're all caught up!</h1>: <h1>You have {message.length} unread {message.length > 1 ? "messages" : "message"}</h1>
       }
    </div>
  );
}

export default App;