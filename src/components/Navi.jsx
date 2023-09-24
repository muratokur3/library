import React from 'react'
import Logo from "../images/logo.png"
import '../style/navi.css'
function Navi() {
  return (
    <nav> 
      <div className="brand">

<img src={Logo} alt="logo"/>
 <b>BilgeAdam Library</b>
</div> <div className="kategori">
<ul>
<li>Yazilim</li>
 <li>Edebiyat</li>
<li>Tarih</li>
<li>Diger</li>
 </ul>
</div>


    </nav>
  )
}

export default Navi