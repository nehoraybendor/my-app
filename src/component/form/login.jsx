import React from 'react'
import "./login.css";
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <div className='d-flex justify-content-center'>
        <form className='col-lg-3 col-md-9 col-8 mt-5 shadow p-3 rounded-5'>
            <label className='mt-2'>Email:</label>
            <input {...register('email',{pattern:emailReg})} className='form-control' type="text" placeholder='....@gamil.com' />
            {errors.email && <span className='d-block text-danger'>Invalid Email....</span>}
            <label className='mt-2'>Password:</label>
            <input {...register('password',{minLength:4,maxLength:20})}  className='form-control' type="password" />
            {errors.password && <span className='d-block text-danger'>Invalid Password....</span>}
            <button className='btn btn-primary mt-3 px-4 py-2'>Login</button>
        </form>
    </div>
  )
}

export default Login

