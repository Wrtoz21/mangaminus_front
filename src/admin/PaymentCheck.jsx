import { getUser } from "../hooks/get-user"

export default function PaymentCheck() {

    const { admin, payment } = getUser()
    // console.log(payment[0].paymentImage)
    console.log(admin)
    return <div>
        <div>
            {admin.map((e) => {
                return <div key={e.id} className="grid gird-cols-2 p-3 gap-2 items-center">
                    <div className="flex justify-between ">
                        <div className="flex p-2">Username:{e.username}</div>
                        <button className="bg-green-600 rounded-full border p-1">ClickToWatch</button>
                    </div>
                    <div className ="flex flex-col gap-2"> 
                    {e.userWallet[0].Payment.map((el) => {
                        return <div key={el.id}className=" bg-white border-black border ">{el.paymentImage}</div>
                    })}</div>
                </div>

            })}


    </div>
    </div >
}