import defaultImg from "../assets/banking.jpg"
import { getUser } from "../hooks/get-user"
import UploadSlip from "./UploadSlip"

export default function UserPayment() {

    const { authUser } = getUser()
    return <div className='border border-black m-3 min-w-fit'>
        <div>
            <div>
                <div className='grid gird-cols-3 p-2'>
                    <img src={defaultImg} alt="asd" />
                    <hr />
                 
                    <UploadSlip/>
                </div>
            </div>
        </div>
    </div>
}