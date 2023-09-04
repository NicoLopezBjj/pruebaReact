import { useEffect, useState } from "react"

export function useCatImage ( {fact} ) {
  const [imageUrl, setImageUrl] = useState()

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

    return {imageUrl}
}  