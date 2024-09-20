
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
 const [formData, setFormData] = useState({ firstName: '', username: '', email: '', password: '', password2: '' })
 const { firstName, username, email, password, password2 } = formData

 const dispatch = useDispatch()
 const { isSuccess, message, isError } = useSelector((state) => state.auth)
 
 useEffect(() => {
  if (isSuccess) {
    notification.success({
      message: 'Success',
      description: message,
    })
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
     return dispatch(register(formData))
   }
 }


 const onChange = (e) => {
   const {name, value} = e.target
   setFormData((prevState) => ({ ...prevState, [name]: value }))
 }

 return(
  <form onSubmit={onSubmit}>
    <input type="text" name="firstName" value={firstName} onChange={onChange} />
    <input type="text" name="username" value={username} onChange={onChange} />
    <input type="email" name="email" value={email} onChange={onChange} />
    <input type="password" name="password" value={password} onChange={onChange} />
    <input type="password" name="password2" value={password2} onChange={onChange} />
    <button type="submit">Register</button>
  </form>
 )
}

export default Register