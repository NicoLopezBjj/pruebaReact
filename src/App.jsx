import { useEffect, useState } from 'react'
import './App.css'

const PRIMER_API_RANDOM_FACT = ('https://catfact.ninja/fact')  
const SEGUNDA_API_IMAGE = ('https://cataas.com/cat/says/hello')
const CAT_PREFIX_IMAGE = 'https://cataas.com'


function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

// PARA RECUPERAR O ACTUALIZAR EL FACT DEL GATO
  useEffect (()=>{
    fetch(PRIMER_API_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
      })
  }, [])
  
// PARA ACTUALIZAR LA IMAGEN DEL GATO
  useEffect (()=>{
      if (!fact) return

      const threeWords = fact.split(' ',3)
      console.log(threeWords)

      const wordsUrl = threeWords.join(' ')

      fetch(`https://cataas.com/cat/says/${wordsUrl}?size=50&color=red`)
      .then(res => res.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob)
        setImageUrl(imageUrl)
      })
  }, [fact])
       
  

const handleClick = () => {
    fetch(PRIMER_API_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
      })
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
