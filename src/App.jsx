
import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
