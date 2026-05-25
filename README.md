# Lab6 Chat IA

Este es el repositorio que contiene el código fuente de mi Laboratorio 6, en el cual implemento una página web sencilla que se conecta a un LLM a través de la API de Gemini para generar texto y permitir al usuario hacer preguntas.

Al iniciar este proyecto quería utilizar un kit de desarrollo web que ya habíamos utilizado en clase, por lo que decidí escoger Vite. Los primeros commits del repositorio fueron utilizados para eliminar boilerplate code que no necesitaba, ya que quería que la página tuviera un diseño lo más minimalista posible.

La siguiente decisión importante fue escoger qué LLM utilizar mediante sus developer API tools. Debido a que ya había utilizado Gemini anteriormente en un hackathon, decidí optar por esta opción porque ya tenía mis API keys configuradas y conocía la manera de utilizar sus endpoints.

El primer problema con el que me enfrenté durante el desarrollo fue que inicialmente había creado una sesión de Gemini que únicamente funcionaba para un solo prompt. Esto impedía mantener conversaciones con el modelo, ya que la memoria se reiniciaba después de cada mensaje. Para solucionarlo, cambié a la modalidad de chat, en donde toda la conversación de la sesión puede ser accedida por el modelo, permitiendo una experiencia mucho más útil y natural.

Finalmente, decidí agregar un frontend inspirado en aplicaciones de mensajería para que la interfaz fuera más intuitiva y fácil de utilizar.