import React from 'react'
import "../style/form.scss"

const Form = () => {
  return (
    <form>
        <h3>Kitap Ekle</h3>
        <select>
          <option>Kategori Seçiniz</option>
          <option>Yazılım</option>
          <option>Edebiyat</option>
          <option>Tarih</option>
          <option>Diğer</option>
        </select>
        <input type="text" placeholder='Kitap Adı'/>
        <input type="text" placeholder='Kitap Yazarı'/>
        <input type="number" placeholder='Kitap Sayfa Sayısı'/>
        <input type="text" placeholder='Kitap Resimi(URL)'/>
        <textarea placeholder='Kitap Açıklaması'></textarea>
        <input type="submit" value="Ekle"/>
    </form>
  )
}

export default Form