import React from 'react'

interface CardProps {
  bgColor: string;
  children: React.ReactNode;
}

const Card = ({ bgColor, children }: CardProps) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        margin: '10px',
        backgroundColor: bgColor,
        maxWidth: '400px',
      }}
    >
      {children}
    </div>
  )
}

export default Card