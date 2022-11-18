import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';


//#081229 color
const MyLogin = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin =(data)=> {
    console.log(data)
  }


  return (
    <div className="h-[800px] bg-slate-700 flex justify-center items-center">
      <div className="w-96 p-10 text-xl">
       
        <form onSubmit={handleSubmit(handleLogin)} className="shadow-2xl px-3 py-9">
        <h1 className="text-4xl text-center font-bold text-white">Login</h1>
          {/* name */}
          <div className="form-control flex text-slate-700 justify-between w-full max-w-xs">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input type="firstName" {...register("firstName")} />
            {/* lastName */}
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input type="lastName" {...register("lastName")} />
          </div>

          {/* photoURL */}
           <div className="form-control flex text-slate-700 justify-between w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="photoURL" {...register("photoURL")} />
           </div>

          {/* email */}
          <div className="form-control text-slate-700 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email")} />
          </div>

          {/* password */}
          <div className="form-control text-slate-700 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input  type="password" {...register("password")} />
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>

          {/* submit */}
          <input className="btn text-xl bg-white text-slate-600 font-bold text-center w-full max-w-xs"value='Login' type='submit' />
          <div className="form-control text-slate-700 w-full max-w-xs">
             {/* <input className=" w-full max-w-xs btn btn-accent text-white label-text" type='Login' value='Login'></input> jhankar vai */}
            <small className="text-white">New to Doctor's portal 
            <Link className="text-blue-500 text-xs" to='/signup'>Create an account</Link></small>
             
            {/* divider */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider text-slate-50"><small className="text-sm">Login with social accounts</small></div> 
            </div> 
            {/* divider end */}
            
             <div className="flex justify-center items-center gap-3 text-2xl">
              <span className='text-white'> <FaGoogle></FaGoogle></span>
              <span className="text-white"><FaGithub></FaGithub></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyLogin;
