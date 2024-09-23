import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { login, reset } from '../../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'

const Login = () => {
    const [formData, setFormData] = useState({ email:'', password:'' })
    const {email, password} = formData
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isError, isSuccess, message } = useSelector((state) => state.auth)
    useEffect(() => {
      if (isError) {
        notification.error({ message: 'Error', description: message })
      }
      if (isSuccess) {
        notification.success({ message: 'Success', description: message })
        setTimeout(() => {
          navigate('/home')
        }, 2000)
      }
      dispatch(reset())
    }, [isError, isSuccess, message])

    const onSubmit = (e) => {
      e.preventDefault()
      console.log('formData', formData)
      dispatch(login(formData))
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="email" value={email} onChange={onChange}/>
        <input type="password" name="password" placeholder="password" value={password} onChange={onChange}/>
        <button type="submit">Login</button>
    </form>
  )
}
export default Login