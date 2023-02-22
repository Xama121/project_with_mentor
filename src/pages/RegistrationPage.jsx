import React,{useState} from 'react'
import {useAuth} from '../contexts/AuthContextProvider'
import { Button,TextField } from '@mui/material'

const RegistrationPage = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {register,error} = useAuth()


  return (
    <div className='login-box'>
      <h2>Register User</h2>
      {error? (
        <h3>{error}</h3>
      ) : (
        ''
      )}
      <form>
      <div className="user-box">
      <TextField variant="filled" type="text" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className='user-box'>
      <TextField variant="filled" type="text" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      <Button onClick={()=>register(username,password)}>Register</Button>
      </a>
      </form>
    </div>
  )
}

export default RegistrationPage