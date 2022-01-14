import React from 'react'

export default function CompareTax({title, receiver, amount, tax}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <p>Você recebe</p> 
        <p>Taxas</p>
      </div>
      <div>
        <p>{receiver} {amount?.toFixed(2)} {`${parseInt(tax * 100)}%`}</p>
      </div>
    </div>
  )
}