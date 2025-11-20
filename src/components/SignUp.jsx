import React, { useState } from 'react'
import authService from '../appwrite/auth'
import {Button,Input,Logo,Select} from "../components/index"
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { set, useForm } from 'react-hook-form' 
import { CircularProgress } from '@mui/material'

function SignUp() {
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    const [error, seterror] = useState("")
    const {register , handleSubmit , formState : {errors}} = useForm()
    const [loading, setloading] = useState(false)

    const create = async(data) => {
        seterror("")
        setloading(true)
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            seterror(error.message)
        } finally{
            setloading(false)
        }

    }

  return (
     <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)} >
                    <div className='space-y-5'>
                        <Input
                            label = "Full Name :"
                            placeholder = "Enter your Full Name"
                            {
                                ...register("name" , {
                                    required : "*Name is Required",
                                    minLength: {
                                        value: 3,
                                        message: "*Name must be at least 3 characters",
                                        },
                                })
                            }
                        />
                        {
                            errors.name && <p className="text-red-500 text-sm mb-3">{errors.name.message}</p>
                        }
                        <Input
                            label = "Email : "
                            placeholder = "Enter Your Email"
                            {
                                ...register("email" , {
                                    required : "*Email is required",
                                    validate : {
                                        matchPatern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                    "Email address must be a valid address(test@gmail.com)",}
                                })}
                        />
                        {
                            errors.email && <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>
                        }
                        <Input
                            label = "Password : "
                            placeholder = "Enter your Password"
                            {
                                ...register("password" , {
                                    required : "*Password is required",
                                    validate : {
                                        matchPatern : (value) => /^(?=.*[A-Za-z])(?=.*[@$!%*?&_])[A-Za-z0-9@$_!%*?&]{8,}$/.test(value) || 
                                    "Password must contain at least 8 characters, with letters and numbers(@$!%*?&)"}

                                })
                            }
                        />
                        {
                            errors.password && <p className="text-red-500 text-sm mb-3">{errors.password.message}</p>
                        }
                        <Button type="submit" className="w-full">
                            {
                                loading ? <CircularProgress size={20} sx={{color:"white"}}/> : "Create Account"
                            }
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default SignUp