import React, { useEffect, useState } from 'react'
import { Button, InputLabel  } from '@mui/material'
import Message from './Message'
const App = () => {

  const [Input, setInput] = useState('') 
  const [message, setMessage] = useState(
     {userName: 'Gaurav', text: 'Heyy'},
    {userName: 'Nikk', text: 'Heyy you'}
    
  )
   
  
  const [userName, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Enter your name'))
  },[])
 
  console.log(message)
  const sendMessage = (e) => {
    e.preventDefault()
    setMessage([...message,{userName: userName, text: Input}])
    setInput('')
  }
  return (
    
       <div className="app">
      <h1>Hello Welcome to ChatOin</h1>
      <h2>Welcome {userName}</h2>
      
      <form>
         <InputLabel>Enter your message....</InputLabel>
          <input value={Input} onChange={e => setInput(e.target.value)} />
       <Button disabled={!Input} type='submit' onClick={sendMessage}>Send</Button>
      </form>
    {
        message.map(message => (
         <Message  userName={message.userName} text={message} />
        ))
    }
    </div>
   
   
  )
}

export default App