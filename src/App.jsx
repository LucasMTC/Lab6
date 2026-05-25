import { useState, useRef } from 'react'
import { GoogleGenAI } from "@google/genai";

function App() {
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY
  const ai = new GoogleGenAI({apiKey: geminiApiKey});
  const chatRef = useRef(ai.chats.create({model: "gemini-2.5-flash"}))
  
  const [text, setText] = useState("")
  const [messages, setMessages] = useState([])

  const textareaRef = useRef(null)

  const handleChange = (e) => {
    setText(e.target.value)
    textareaRef.current.style.height = "auto"
    textareaRef.current.style.height =
    textareaRef.current.scrollHeight + "px"
  }

  async function submitRequest() {
    if (!text.trim()) return

    const userMessage = {
      role: "user",
      text: text
    }

    setMessages((prev) => [...prev, userMessage])

    const response = await chatRef.current.sendMessage({
      message: text
    })

    const aiMessage = {
      role: "ai",
      text: response.text
    }

    setMessages((prev) => [...prev, aiMessage])

    setText("")

    textareaRef.current.style.height = "auto"
  }

  return (
    <div id='main-page'>

      <h1 className='Titulo'>
        Lucas's Chatbot
      </h1>

      <div className='chat-container'>

        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "message-row user-row"
                : "message-row ai-row"
            }
          >
            <div
              className={
                message.role === "user"
                  ? "message-bubble user-bubble"
                  : "message-bubble ai-bubble"
              }
            >
              {message.text}
            </div>
          </div>
        ))}

      </div>

      <div className='input-area'>
        <textarea
          id='prompt'
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder='Escribe tu mensaje'
        />

        <button onClick={submitRequest}>
          Enviar
        </button>
      </div>

    </div>
  )
}

export default App