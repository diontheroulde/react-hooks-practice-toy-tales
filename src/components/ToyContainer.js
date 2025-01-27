import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onUpdateToy, onDeleteToy}) {
  


  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard 
          key={toy.id}
          name={toy.name}
          image={toy.image}
          likes={toy.likes}
          toy={toy}
          onUpdateToy={onUpdateToy}
          onDeleteToy={onDeleteToy}
          
        />
      ))}
    
    </div>
  );
}

export default ToyContainer;
