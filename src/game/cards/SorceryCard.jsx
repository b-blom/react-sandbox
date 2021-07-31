import React, { useState } from 'react';
import "./Card.css";


export default function SorceryCard(props) {

  const CardDetails = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <div  >

      </div>
    );
  };

  const [showCardDetails, setShowCardDetails] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setShowCardDetails(true);

  };
  const handleMouseOut = () => {
    setShowCardDetails(false);
  };


  return (
    <div className="playing-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h6 handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}> {props.card.sorceryName}</h6>
      <div className="creature-image">
        {props.card.sorceryImage}
      </div>
      <div className="ability-button">
        <p className="small-font">
          {props.card.sorceryDescription}
        </p>
        <p className="small-font">
          cost: {props.card.sorceryCost}
        </p>
      </div>
      {showCardDetails && <CardDetails
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} />
      }
    </div>
  );
}
