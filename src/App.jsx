
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
        
          { 
            puppies.map((puppy) => {
              return <p>{puppy.name}</p>
            })
         }
        
      </div>
    </>
  )
}

export default App
