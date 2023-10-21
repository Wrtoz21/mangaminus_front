export default function TableExchangeRate({ bath, coin }) {
    return (<div className='grid grid-cols-2 gap-2'>
        <div className = 'flex justify-center border-black border'>

            <div className='flex  justify-center p-2 w-32 '>
                {bath.bath} บาท

            </div>
        </div>
        <div className = 'flex justify-center border-black border'>

            <div className='flex  justify-center p-2 w-32'>
                {coin.coin} coin

            </div>
        </div>
        <hr />
    </div>)
}