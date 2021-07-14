import React from "react";

function ToyCard({toy, onUpdateToy, onDeleteToy}) {
  const {id, name, image, likes} = toy
  

  const handleDonate = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    onDeleteToy(id)
  }

  const handleLike = () => {
    const configObject = {
      likes: likes +1
    }
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "PATCH",
        headers:{
        "Content-Type": "application/json",
        },
      body: JSON.stringify(configObject)
    })
        .then(res => res.json())
        .then(onUpdateToy)
  }
  

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
