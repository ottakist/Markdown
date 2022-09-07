import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {

  const [markdown,setMarkdown] =useState(()=>{
     const localText = JSON.parse(localStorage.getItem('text'));
     return localText || "# markdown"
  })
  useEffect(()=>{
    localStorage.setItem('text', JSON.stringify(markdown));
    
  },[markdown])

const clearStorage=()=>{
  setMarkdown('# markdown');
  // localStorage.removeItem('text')
}

  return (<main>
     <section className='markdown'>
      <div className="textarea_container">
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        >
        </textarea>
          <button className='btn' onClick={()=>clearStorage()}>remove</button>
      </div>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
        </section>
  </main>)
}

export default App
