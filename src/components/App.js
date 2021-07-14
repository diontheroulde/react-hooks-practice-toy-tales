import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleDelete = (id) => {
    const updatedToy = toys.filter(toy => toy.id !== id)
    setToys(updatedToy) 
  }

  const handleUpdateToy = (updatedToyLikes) => {
    const toyLikes = toys.map((toy) => 
      toy.id === updatedToyLikes.id ? updatedToyLikes : toy
    )
    setToys(toyLikes)
  }

  useEffect(() =>{
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data =>setToys(data))
  },[]) 

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDelete} onUpdateToy={handleUpdateToy} />
    </>
  );
}

export default App;
