import React from 'react'
import "./compareTax.css"

export default function CompareTax({title, receiver, amount, tax}) {
  return (
    <div className='compare-container'>
      <h4>{title}</h4>
      <div className='compare-text'>
        <p>Você recebe</p> 
        <p>Taxas</p>
      </div>
      <div className='compare-info'>
        <p>{receiver} {amount?.toFixed(2)}</p>
        <p>{`${parseInt(tax * 100)}%`}</p>
      </div>
    </div>
  )
}