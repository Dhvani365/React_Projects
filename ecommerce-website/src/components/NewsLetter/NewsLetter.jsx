import { useState } from 'react'
import './NewsLetter.css'

function NewsLetter(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="newsLetter">
        <h1>Get Exclusive Updates</h1>
        <p>Subscribe to the Newsletter and get the offers mail</p>
        <div>
            <input type="text" placeholder='Enter Email ID'/>
            <button>Subscribe</button>            
        </div>
      </div>
    </>
  )
}

export default NewsLetter
