import React, {useState} from 'react'
import {useAuth} from '../contexts/AuthContextProvider'
import { Button,TextField } from '@mui/material'



const LoginPage = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const {login,error} = useAuth()

  return (
    <div className='login-box'>
      <h2>Login User</h2>
      {error? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <form>
      <div className='user-box'>
      <TextField variant="filled"  placeholder='Username' onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className='user-box'>
      <TextField variant="filled"  placeholder='Password' onChange={e => setPassword(e.target.value)}/>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      <Button onClick={()=>login(username,password)}>Login</Button>
      </a>
      </form>
    </div>
  )
}

export default LoginPage