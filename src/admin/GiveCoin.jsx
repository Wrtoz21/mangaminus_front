import { useState } from "react"
import axios from "../config/axios"
import { getUser } from "../hooks/get-user"
import UserSelect from "./UserSelect"

export default function GiveCoin() {

    const { admin, uploadCoin } = getUser()

    const [userSelect,setUserSelect] = useState({})
    const [coin,setCoin] = useState({})

    const updateCoin = async input => {
        input.preventDefault()
        console.log(input)
        try {
            
            
            await uploadCoin({userSelect,coin}).then(() => {
                alert("Upload Success")
            })
        } catch (error) {
            console.log(error)
        }
    }


    const handleOnChange = (e) => {
        e.preventDefault()
        setCoin({Coin:e.target.value})
    }
    return <form onSubmit={updateCoin}>
        <div className="flex gap-2 p-3 items-center border-b border-black">
            <div>
                <UserSelect admin={admin} setUserSelect={setUserSelect} />
            </div>
            <div className='flex'>
                <div className="flex flex-row gap-2">
                    <label htmlFor="coin-money" >Coin-select :</label>
                    <select onChange ={handleOnChange}id="coin-money" name='coin' className="w-16">
                        
                        <option value="default">select</option>
                        <option value="50">100</option>
                        <option value="100">250</option>
                        <option value="200">550</option>
                        <option value="500">1800</option>
                        <option value="1000">4000</option>
                    </select>
                </div>
            </div>
            <div className="flex  ">

                <button type="submit" className="bg-green-600 rounded-full border p-1"> AddCoin</button>
            </div >
        </div>
    </form >
}