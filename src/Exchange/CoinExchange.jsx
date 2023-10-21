import ExchangeRate from "./ExchangeRate";
import UserPayment from "./UserPayment";

export default function CoinExchange() {
    return <div className='flex justify-center'>
        <div className='w-96'>
            <ExchangeRate/>
            <div></div>
        </div>
        <div className='flex w-96  justify-center'>
            <UserPayment/>
        </div>
    </div>
}