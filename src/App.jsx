import { useEffect, useState } from 'react'
import './App.css'

const PRIMER_API_RANDOM_FACT = ('https://catfact.ninja/fact')  
const SEGUNDA_API_IMAGE = ('https://cataas.com/cat/says/hello')
const CAT_PREFIX_IMAGE = 'https://cataas.com'


function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect (()=>{
    fetch(PRIMER_API_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)
      
      const threeWords = fact.split(' ',3)
      console.log(threeWords)

      const wordsUrl = threeWords.join(' ')

      fetch(`https://cataas.com/cat/says/${wordsUrl}?size=50&color=red`)
      .then(res => res.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob)
        setImageUrl(imageUrl)
      }) 
    
    })
  }, []) 

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the threewords for ${fact}`} />}
    </main>
  )
}

export default App
