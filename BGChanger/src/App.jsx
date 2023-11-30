import { useState } from 'react'

function App() {
  const [color, setColor] = useState("")

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 top-6'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lb bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor: "violet"}}
          onClick={() => setColor("violet")}>Violet</button>
          <button className='outline-none px-4 rounded-full py-1 text-black' style={{backgroundColor: "cyan"}}
          onClick={() => setColor("cyan")}>Cyan</button>
          <button className='outline-none px-4 rounded-full py-1 text-white' style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}>Black</button>
          <button className='outline-none px-4 rounded-full py-1 text-black' style={{backgroundColor: "rgba(1,89,54,0.7)"}}
          onClick={() => setColor("rgba(1,89,54,0.7)")}>Morpichh</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
