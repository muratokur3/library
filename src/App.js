import Navi from './components/Navi'
import Form from './components/Form'
import CardList from './components/CardList'
import './style/app.css'
import { useState } from 'react'
import Books from './data/Books'
function App() {
  const [kitaplar,setKitaplar]=useState(Books)
  return (
    <>
    <Navi/>
    <Form/>
    <CardList kitaplar={kitaplar}/>
    </>
  );
}

export default App;
