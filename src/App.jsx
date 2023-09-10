
import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <div>
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
