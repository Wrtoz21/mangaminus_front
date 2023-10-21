import GiveCoin from "./GiveCoin";
import UploadAdmin from "./UploadAdmin";
import PaymentCheck from "./paymentCheck";

export default function Admin() {

    return <div className="flex justify-center">
        <div className="flex p-6 gap-2">
            <UploadAdmin/>
            <div className ="bg-slate-400 border border-black">
                <GiveCoin />
                <PaymentCheck />
            </div>
        </div>
    </div>
}