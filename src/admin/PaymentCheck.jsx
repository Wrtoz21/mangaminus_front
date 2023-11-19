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
                        <div className="flex p-2  text-xl">
                            <div className="font-bold">
                                Username:
                                </div>
                                {e.username}</div>
                    </div>
                    <div className ="flex flex-col gap-2 w-5/12"> 
                    {e.userWallet[0].Payment.map((el,index) => {
                        let listnumber = 1
                        return <div key={el.id}className=" bg-white border-black border rounded-xl">
                          
                            <a 
                            className="text-blue-600 rounded-xl"
                            key ={el.id} href={el.paymentImage}>Click Here Slip number {index+1}</a>
                            </div>
                    })}</div>
                </div>

            })}


    </div>
    </div >
}