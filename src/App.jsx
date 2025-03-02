import { useState } from "react"


import axios from "axios"
function App() {
  const [ Input, setInput ] = useState("")
  const [ select, setSelect ] = useState("")
  const [ result, setResult ] = useState("")
  // const [loading, setLoading] = useState(false)

  const handleTextTranslation = async () => {
    
    try {
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': '4218e772d8mshd3036d10d2f0012p1a8adbjsnbdbc9d7a30a6',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: `${Input}`,
          source: 'en',
          target: `${select}`,
          format: 'text'
        }
      };

      const response = await axios.request(options)
      
      setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText)
    } catch (error) {
      
    }
  }

 

  return (
    <div className="h-screen w-screen bg-gray-500 flex items-center justify-center">

      <div className="flex items-center justify-center flex-col gap-y-10 ">
        <h1 className="text-3xl text-white font-bold">
          Text Translator
        </h1>

        <div className="flex items-center justify-center flex-col gap-y-5">
          <textarea name="input-text" className="bg-gray-800 h-30 w-[500px] border  outline-none rounded-lg text-lg px-5 py-2 text-white" onChange={(e) => setInput(e.target.value)}/>
          <textarea name="input-text" className="bg-gray-800  h-30 w-[500px] border  outline-none rounded-lg text-lg px-5 py-2  text-white" value={result} readOnly/>
        </div>

        <div>
          <label htmlFor="options">Converted Into: </label>
          <select name="value" className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline-none cursor-pointer" onChange={(e) => setSelect(e.target.value)}>
           
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button className="bg-slate-700 text-slate-100 mx-auto w-[500px] py-2 rounded-lg cursor-pointer flex items-center justify-center" onClick={handleTextTranslation}>
          Translate
          
        </button>
      </div>
    </div>
  )
}

export default App
