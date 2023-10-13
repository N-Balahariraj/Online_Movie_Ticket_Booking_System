import React from 'react'

export default function TheatreCards(props) {

  const{name, location, seats} = props. TheatreDetails
  return (
    <div className='TheatreCard'>
      <h6>{name}</h6>
      <span>{location}</span>
      <span>{seats}</span>
    </div>
  )
}
