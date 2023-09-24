import React from 'react'
import '../style/card.css'
const Card = ({kitaplar}) => {

  return (
    kitaplar.map(kitap=>
      <div key={kitap.id} className='card'>
        <button>X</button>
        <img src={kitap.resim} alt="kitapResmi"/>
        <div className="card-body">
          <p>{kitap.adi}</p>
          <p>Kitap Kategorisi: {kitap.kategori}</p>
          <p>Kitap yazarı : {kitap.yazar}</p>
          <p>Sayfa Sayısı : {kitap.sayfa}</p>
          <p>Kitap Açıklaması : {kitap.aciklama}</p>
        </div>
      </div>
      )  
  )
}

export default Card