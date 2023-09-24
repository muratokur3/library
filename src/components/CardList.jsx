import React from 'react'
import Card from './Card'
import '../style/card-list.css'
function CardList({kitaplar}) {
  return (
    <div id="card-list">
      <Card kitaplar={kitaplar}/>
    </div>
  )
}

export default CardList