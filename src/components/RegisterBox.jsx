import Joi from 'joi';
import RegisterDetail from './RegisterDetail';
// import { getUser as registerDATA} from '../hooks/get-user';
import { getUser } from '../hooks/get-user';
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const registerSchema = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/).trim().required(),
    email: Joi.string().trim().email({ tlds: false }).required(),
    mobilePhone: Joi.string().pattern(/^[0-9]{10}$/).trim().required(),
})


export default function RegisterBox() {
    const { registerAPI } = getUser();
    const Navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, } ,setError } = useForm({
        resolver: joiResolver(registerSchema)
    })
    const handleSubmitForm = formData => {
        console.log(formData)
        registerAPI(formData)
            .then(() => {
                alert('Registed')
                return Navigate("/")
            })
            .catch(err => {
                setError(err.response?.data.fieldError ,{
                    type:'custom' ,  message: err.response?.data.message
                })});
    };
    return <form className="flex flex-col gap-2 p-10 "
        onSubmit={handleSubmit(handleSubmitForm)}
    >
        <div>
            <div>username
            </div>

            <input
                placeholder="username"
                className={'border-2 border-black focus:ring outline:none'}
                // onChange={handleChangeInput}
                //    hasError={error.username}
                // name="username"
                // value={input.username}
                {...register('username')}
            />

            {/* {Object.keys(error).length ?<span>{error}</span> : <></>} */}

        </div>
        {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
        <div>
            <div>password
            </div>

            <input
                type="password"
                placeholder="password"
                // value={input.password}
                className={'border-2 border-black focus:ring outline:none'}
                // onChange={handleChangeInput}
                //  hasError={error.password}
                // name="password"
                {...register('password')}
            />

        </div>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        <div>
            <div>email
            </div>

            <input
                placeholder="email"
                // value={input.email}
                className={'border-2 border-black focus:ring outline:none'}
                // onChange={handleChangeInput}
                // hasError={error.email}
                // name="email"
                {...register('email')}
            />
        </div>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <div>
            <div>mobilePhone
            </div>
            <input
                placeholder="099-999-9999"
                type="tel"
                id="phone"
                pattern="[0]{1}[6-9]{1}{0-9}-[0-9]{3}-[0-9]{4}"
                // value={input.mobilePhone}
                className={'border-2 border-black focus:ring outline:none'}
                // onChange={handleChangeInput}
                // hasError={error.mobilePhone}
                // name="mobilePhone"
                {...register('mobilePhone')}
            />
        </div>
        {errors.mobilePhone && <p className='text-red-500'>{errors.mobilePhone.message}</p>}

        <button className="bg-green-400 border-2 border-black" >Register</button>
        {/* {console.log(errors)} */}
    </form>
}