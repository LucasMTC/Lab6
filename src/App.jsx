import { useState } from 'react'

function App() {

  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY

  return (
    <>
      <h1>{geminiApiKey}</h1>
    </>
  )
}

export default App
