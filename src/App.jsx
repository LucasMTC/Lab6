import { useState, useRef } from 'react'

function App() {

  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY
  const [text, setText] = useState("")
  const textareaRef = useRef(null)

  const handleChange = (e) => {
    setText(e.target.value)

    textareaRef.current.style.height = "auto"
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px"
  }

  return (
    <div id='main-page'>
      <h1 className='Titulo'>Lucas's Chatbot</h1>
      <span></span>
      <h4 className='Titulo'>En que te puedo ayudar el dia de hoy?</h4>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
      >
      </textarea>
    </div>
  )
}

export default App
