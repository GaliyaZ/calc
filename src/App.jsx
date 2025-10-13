import { useState } from 'react'
import './App.css'
import BtnList from './components/BtnList'
import Button from './components/Btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-950 border-emerald-700 border-2 rounded-md'>
        <BtnList/>
      </div>
    </>
  )
}

export default App
