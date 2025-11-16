import React from 'react'

export default function Car(props) {
    const { brend, color } = props
  return (
    <div style={{backgroundColor: color, color:'white'}}>
        Brand: {brend} Color: {color}
    </div>
  );
}
