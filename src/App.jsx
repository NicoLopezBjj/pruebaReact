import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

const SEGUNDA_API_IMAGE = ('https://cataas.com/cat/says/hello')
const CAT_PREFIX_IMAGE = 'https://cataas.com'

// FUNCION "CUSTOMHOOKS" PARA ACTUALIZAR LA IMAGEN DEL GATO


function App() {
  const [fact, setFact] = useState()
  const { imageUrl }= useCatImage ( {fact} )
 
// PARA RECUPERAR O ACTUALIZAR EL FACT DEL GATO
  useEffect (()=>{
    getRandomFact().then(newfact => setFact(newfact))
  },[])
  

const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main className='container card'>
      <h3 className='card-title'>App de gatitos</h3>
      {fact && <p className='card-body'>{fact}</p>}
      <button onClick={handleClick} className='btn btn-secondary mb-2'>Get a new fact</button>
      {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the threewords for ${fact}`} />}
    </main>
  )
}

export default App
