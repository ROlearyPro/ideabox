import Ideas from "./Ideas";
import { useState } from "react";
import Form from "./Form";

import './App.css';

function App() {
  const dummyIdeas = [{ id: 1, title: 'Make sure login is secure', description: 'change passwords, usernames, etc.' },
  { id: 2, title: 'contact old friends', description: 'look up phone numbers, emails, etc.' },
  { id: 3, title: 'clean room', description: 'yeah, just clean it.' }]
  const [ideas, setIdeas,] = useState([dummyIdeas]);


  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} />
    </main>
  )

}


export default App;