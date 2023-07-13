import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp

function App() {
  useEffect(()=>{
    tg.ready()
  },[])
  const yopish = ()=>{
    tg.close()
  }
  return (
    <div>
      <button onClick={yopish}>yopish</button>
    </div>
  )
}

export default App
