import React from 'react'
import logo from "../assets/logo.jpg"
import google from "../assets/google.jpg"
import { IoEyeOutline } from "react-icons/io5"
import { IoEye } from "react-icons/io5"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import axios from "axios";
import { serverUrl } from '../App'


const Login = () => {
  const [show, setShow]= useState(false)
   const[email,setEmail] =useState("")
    
     const[password,setPassword] =useState("")
     const[loading,setLoading] =useState(false)
   const navigate = useNavigate()

   const handleLogin =async () => { 

    setLoading(true)
      try{
        const result =await axios.post(serverUrl + "/api/auth/login",{ password ,email}, {withCredentials:true})
        console.log(result.data)
        setLoading(false)
        navigate("/")
        toast.success("login successful")
      }
    
      catch (error) {
        console.log(error)
        setLoading(false)
        toast.error(error.response.data.message)
      }}
 
  return (
    <div className='bg-[#dddcdb] w-[100vw] h-[100vh] flex items-center justify-center'>
      <form className='[w-90%] md:w-200 h-150 bg-[white] shadow-xl rounded-2xl flex pl-8'onSubmit={(e) => e.preventDefault()}>

        <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col item-center justify-center gap-3'>
          <div>
            <h1 className=' font-semibold text-[black] text-2xl  '>Welcome Back</h1>
            <h2 className = 'text-[#999797]  text-[18px]  '>Login your account</h2>
          </div>
        
            <div className='flex flex-col gap-1 w-[100%%] items-start justify-center px-3'>
<label htmlFor="email" className='font-semibold'>Email</label>
<input type="email" className='border-1 w-[100%] h-[35px]  border-[#e7e6e6] text-[15px] px-[20px] ' placeholder='your email'  onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>
            <div className='flex flex-col gap-1 w-[100%%] items-start justify-center px-3 relative'>
<label htmlFor="password" className='font-semibold'>Password</label>
<input type={show? "text":"password"} className='border-1 w-[100%] h-[35px]  border-[#e7e6e6] text-[15px] px-[20px] ' placeholder='your Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
{show ? <IoEyeOutline className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]'onClick={() =>setShow(prev=>!prev)}/> :
<IoEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={() =>setShow(prev=>!prev)}/>}
          </div>
         <div>
            <button className='w-[95%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center  rounded-[5px] mt-6'disabled={loading} onClick={handleLogin}>
            {  loading ? <ClipLoader size ={30} color="white"/>: "Login"}
            </button>
            <span className='text-[13px] cursor-pointer text-[#585757] flex items-center justify-center h-6'> Forget your  Password?</span>
           {/* ---- divider + text ---- */}
<div className="w-[80%] flex items-center gap-2">
  <div className="w-[25%] h-[0.5px] bg-[#4c4c4c]"></div>

  <div className="w-[50%] text-[15px] text-center">
    or continue
  </div>

  <div className="w-[25%] h-[0.5px] bg-[#4c4c4c]"></div>
</div>

{/* ---- Google button ---- */}
<div className="w-[95%] h-[40px] border border-black rounded-[5px] flex items-center justify-center gap-2 mt-3">
  <img src={google} alt="" className="w-[25px]" />
  <span className="text-[18px] text-gray-500">oogle</span>
</div>
<div className='text-[#6f6f6f]'>create new account <span className='underline underline-offset-1 text-[black]' onClick={()=>navigate("/signup")}> SignUp</span> </div>
</div>

        </div>

        <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex  items-center justify-center flex-col hidden'>
          <img src={logo} alt="logo"  className='w-30 shadow-2xl'/>
          <span className='text-2xl text-white'>virtual courses</span>

        </div>
      </form>
      
    </div>
  

  )
}

export default Login
