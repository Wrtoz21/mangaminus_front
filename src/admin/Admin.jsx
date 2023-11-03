import GiveCoin from "./GiveCoin";
import UploadAdmin from "./UploadAdmin";
import UploadEpisode from "./UploadEpisode";
import PaymentCheck from "./paymentCheck";

export default function Admin() {

    return <div className="flex justify-center">
        <div className="flex p-6 gap-2">
            <UploadAdmin/>
            <hr />
            <UploadEpisode/>
            <div className ="bg-slate-400 border border-black">
                <GiveCoin />
                <PaymentCheck />
            </div>
        </div>
    </div>
}