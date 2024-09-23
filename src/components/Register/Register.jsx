
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
 const [formData, setFormData] = useState({ firstName: '', lastName: '', age:'', username: '', email: '', password: '', password2: '' })
 const { firstName, lastName, age, username, email, password, password2 } = formData

 const dispatch = useDispatch()
 const { isSuccess, message, isError } = useSelector((state) => state.auth)
 
 useEffect(() => {
  if (isSuccess) {
    notification.success({
      message: 'Success',
      description: message,
    })
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }
  if (isError) {
    notification.error({ message: 'Error', description: message })
  }
  dispatch(reset())
 }, [isSuccess, isError, message])

 const onSubmit = (e) => {
  e.preventDefault()
   if (password !== password2) {
     return notification.error({
       message: 'Error',
       description: 'Passwords does not match',
     })
   } else {
     notification.success({
       message: 'Success',
       description: 'User registered!',
     })
     const { password2, ...registerData } = formData
     return dispatch(register(registerData))
    //  return dispatch(register(formData))
   }
 }


 const onChange = (e) => {
   const {name, value} = e.target
   setFormData((prevState) => ({ ...prevState, [name]: value }))
 }

 return(
  <form onSubmit={onSubmit}>
    <input type="text" name="firstName" placeholder="name" value={firstName} onChange={onChange} />
    <input type="text" name="lastName" placeholder="surname" value={lastName} onChange={onChange} />
    <input type="text" name="age" placeholder="age" value={age} onChange={onChange} />
    <input type="text" name="username" placeholder="username" value={username} onChange={onChange} />
    <input type="email" name="email" placeholder="email" value={email} onChange={onChange} />
    <input type="password" name="password" placeholder="password" value={password} onChange={onChange} />
    <input type="password" name="password2" placeholder="repeat password" value={password2} onChange={onChange} />
    <button type="submit">Register</button>
  </form>
 )
}

export default Register