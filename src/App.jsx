import { useState, useRef } from 'react'
import { GoogleGenAI } from "@google/genai";

function App() {
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY
  const ai = new GoogleGenAI({apiKey: geminiApiKey});
  const [text, setText] = useState("")
  const textareaRef = useRef(null)
  const textarea = document.getElementById("prompt")

  const handleChange = (e) => {
    setText(e.target.value)

    textareaRef.current.style.height = "auto"
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px"
  }

  async function sumbitRequest() {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: textarea.value,
      });
      console.log(response.text);
      textarea.value = ""
  }

  return (
    <div id='main-page'>
      <h1 className='Titulo'>Lucas's Chatbot</h1>
      <span></span>
      <h4 className='Titulo'>En que te puedo ayudar el dia de hoy?</h4>
      <textarea id='prompt'
        ref={textareaRef}
        value={text}
        onChange={handleChange}
      >
      </textarea>
      <button onClick={sumbitRequest}>Send Message</button>
    </div>
  )
}

export default App
