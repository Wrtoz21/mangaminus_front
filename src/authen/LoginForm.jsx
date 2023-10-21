import { useState } from "react";
import { getUser } from "../hooks/get-user"
import { useForm } from "react-hook-form";

export default function LoginForm(onClose) {
    const [loginc,setLoginc] = useState();
    const { login } = getUser();
    const { register, handleSubmit, formState: { errors }, setError } = useForm()


    const handleSubmitForm = (formData, e) => {
        login(formData).catch(err => {
            setError(err.response?.data.fieldError, {
                type: 'custom', message: err.response?.data.message
            })
        })

    }

    return (<>
        <div onClick={(e) => {
            e.stopPropagation()
        }}>
            <form onSubmit={handleSubmit(handleSubmitForm)} >
                <div className='border border-black p-5'>
                    <div className="grid grid-cols p-2">Username
                        <input

                            placeholder="username"
                            className=" bg-gray-100 border border-black outline-none p-2"
                            {...register('username', {
                                required: "Username is required",
                                minLength: {
                                    value: 5,
                                    message: 'Username must be at least 6 characters'
                                }
                            })}
                        />
                        {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                    </div >
                    <div className="grid grid-cols p-2">Password
                        <input
                            type="password"
                            placeholder="password"
                            className=" bg-gray-100 border border-black outline-none p-2"
                            {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: 'password must be at least 6 characters'
                                }
                            })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <button className="bg-blue-600 text-2xl text-white rounded-md w-2/5 p-1"
                        >Login</button>
                    </div>
                </div>
            </form>
        </div>
    </>)

}