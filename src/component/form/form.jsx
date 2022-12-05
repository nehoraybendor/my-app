import React from 'react'
import { useForm } from "react-hook-form";
const Form = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const onSub = (_bodyData) =>{
        console.log(_bodyData);
    }
  return (
    <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit(onSub)} className='col-lg-3 col-md-9 col-8 mt-5 shadow p-3 rounded-5'>
            <label className='mt-2'>Name:</label>
            <input {...register('fullName',{minLength:2,maxLength:20})} className='form-control' type="text" />
            {errors.fullName && <span className='d-block text-danger'>In</span>}
            <label className='mt-2'>Email:</label>
            <input {...register('email',{pattern:emailReg})} className='form-control' type="text" />
            <label className='mt-2'>Password:</label>
            <input {...register('password',{minLength:4,maxLength:20})} className='form-control' type="password" />
            <label className='mt-2'>Confirm Password:</label>
            <input {...register('confirmPassword',{required: true, validate: (item)=> getValues('password') === item})} className='form-control' type="password" />
            <label className='mt-2'>Birthdate:</label>
            <input {...register('birthDate',{required:true})} className='form-control text-center' type="date" />
            <button className='btn btn-primary mt-3 px-4 py-2'>Sign Up</button>
        </form>

    </div>
  )
}

export default Form