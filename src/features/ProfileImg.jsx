import { useNavigate } from "react-router-dom";
import UserWallet from "../AboutUser/Userwallet";
import Avatar from "../components/Avatar";
import CoinExchange from "../Exchange/CoinExchange";

export default function ProfileInfo({ profileUser, wallet }) {
    const navigate = useNavigate()
    const handleOnclick = () => {
        return navigate('/coin-exchange')
    }
    console.log(wallet)
    return <>
        <div className='flex flex-col  items-center text-2xl p-3 gap-2 '>
            <div className='flex flex-col border border-black p-5 w-96 gap-3 bg-orange-300'>

                <div className='flex flex-col justify-items-center items-center'>
                    <Avatar ></Avatar>
                </div>
                <hr className='border-black' />
                <div >Username:{profileUser.username}</div>
                <div>Email:{profileUser.email}</div>
                <div>PhoneNumber:{profileUser.mobilePhone}</div>
                <div className='flex justify-start gap-5'>
                    <div className="flex ">
                        <div>จำนวนคงเหลือ</div>
                        <div>{wallet.userCoin}</div>
                    </div>
                    <button className='bg-green-500 w-32 rounded-md p-1 border border-black'
                        onClick={handleOnclick}>เติม Coin</button>
                </div>
            </div>
        </div>
    </>
}