import React,{useState, useEffect} from "react";

function ToyForm({toys, setToys}) {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    const newToyObj = { 
        "name": formData.name,
        "image":formData.image
      }
    
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers:{
         "Content-Type": "application/json" 
        },
        body: JSON.stringify(newToyObj)
        })
        .then(res => res.json())
        .then(data => {
          setToys([...toys, data])
          setFormData({
          name: "",
          image: ""
        })
          console.log(setFormData)
        })
      }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
