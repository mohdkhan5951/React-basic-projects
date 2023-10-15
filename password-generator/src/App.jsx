

import { useCallback, useEffect, useState ,useRef} from 'react'

function App() 
{
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [includeChar, setIncludeChar] = useState(false)
  const [copyButtonText,setCopyButtonText] = useState("copy")
  const passwordRef = useRef(null)

  const copyText = useCallback( () => {
    copyButtonText==="copy"?setCopyButtonText("copied"):setCopyButtonText("copy")
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  } , [password])

  const generatePassword = useCallback(() => {
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    let pwd = ""
    if(includeChar) str += "!@#$%^&*"
    if(includeNumber) str  += "1234567890"
    for(let i=0;i<length;i++)
    {
      let num = Math.floor(Math.random()*str.length)
      pwd += str.charAt(num);
    }
    setPassword(pwd);
  },[length,includeNumber,includeChar])

  useEffect(()=>{
    generatePassword();
    setCopyButtonText("copy")
  },[length,includeNumber,includeChar])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h1 className='text-center text-3xl my-3 text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input 
        type = "text"
        value = {password}
        className="outline-none w-full py-1 px-3"
        ref={passwordRef}
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
        onClick={copyText}
          > {copyButtonText} </button>
      </div>
      <div className='flex flex-wrap text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
            />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={includeNumber}
            onChange={()=>
              setIncludeNumber((prev)=>!prev)
            }
            />
            <label> Number </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={includeChar}
            onChange={()=>
              setIncludeChar((prev)=>!prev)
            }
            />
            <label>specialCharacter</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
