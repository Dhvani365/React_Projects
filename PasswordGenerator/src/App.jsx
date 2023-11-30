//useState(defaultVal), useCallback(function, dependencies), useCallback(function, dependencies), useRef(defvalue)

import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setlength] = useState(8) //Determines lenth of the password
  const [num, setNum] = useState(false) //Enables Lowercase letters in password
  const [specialchar, setChar] = useState(false) //Enables Uppercase letters in password
  const [randomPassword, setPass] = useState("");

  const passRef = useRef(null)

  const Generator = useCallback(()=>{
    let passwd=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"
    if(num) { str += "0123456789" }
    if(specialchar) { str += "*&%$#@~+-"}
    for(let i=1; i<=length; i++){
      let index= Math.floor(Math.random()*str.length+1)
      passwd += str.charAt(index)
    }
    
    setPass(passwd)

  },[length, num, specialchar, setPass])

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(randomPassword)
  },[randomPassword])

  useEffect( ()=>{
    Generator()
  }, [length, num, specialchar])

  return (
    <>
     
      <div className='w-full w-max bg-black mx-auto my-8 px-4 py-4 rounded-xl'>    
          <h1 className='text-center text-white'>Password Generator App</h1>
          <div className='flex item-strech'>
            <input type="text" value={randomPassword} placeholder='Generated Password' className='outline-none w-full px-3 my-2' ref={passRef} readOnly/>
            <button className='bg-yellow-500 px-3 py-0.5  my-2 strech-2' onClick={copyPass}> Copy </button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{
              setlength(e.target.value);
            }}/>
             <label className='text-white'> Length : {length}</label>      
             <input type="checkbox" defaultChecked={num} id="numInput" onChange={()=>{
              setNum((prev)=>!prev);
             }}/> <label className='text-white'>Allow Numbers </label>     
            <input type="checkbox" defaultChecked={specialchar} id="numInput" onChange={()=>{
              setChar((prev)=>!prev);
             }}/> <label className='text-white'>Allow Special characters</label>
          </div>          
      </div>  
      </>  
  )
}

export default App
