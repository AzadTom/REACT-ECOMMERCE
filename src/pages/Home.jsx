import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigator = useNavigate()
  return (
    <button onClick={()=> navigator("/signup")} > Home</button>
  )
}

export default Home