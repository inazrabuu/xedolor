import React from 'react'

import './card.styles.css'

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="member" src={`https://robohash.org/${props.member.id}?set=set2&size180x180`} />
      <h2>{props.member.name}</h2>
      <p>{props.member.email}</p>
    </div>
  )
}