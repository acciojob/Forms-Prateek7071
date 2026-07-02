import React from "react";

const Card = ({children}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        maxWidth: "400px",
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: 'orange'
      }}
    >
      {children}
    </div>
  )
}

export default Card;