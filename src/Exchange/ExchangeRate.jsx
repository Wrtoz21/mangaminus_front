import { useEffect, useState } from 'react'
import axios from '../config/axios'
import TableExchangeRate from "./TableExchangeRate"

export default function ExchangeRate() {

    const [getTable, setGetTable] = useState([])

    useEffect(() => {
        axios
            .get('coin-exchange/getTableExchangeRate')
            .then(res => {
                setGetTable(res.data.check)

            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (<div className='flex flex-row items-center justify-center bg-none '>
        <div className = 'border border-black w-96 m-3 text-2xl p-4'>
            <div className='flex items-center justify-center p-3 '>ตารางแลกเงิน</div>
            {getTable.map(el => (
                <TableExchangeRate key={el.id} bath={el} coin={el} />
            ))}
        </div>
    </div>)
}