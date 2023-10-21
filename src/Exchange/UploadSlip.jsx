
import { useNavigate } from "react-router-dom";
import { getUser } from "../hooks/get-user"
import SlipButton from './SlipButton';
import { useState } from 'react';

export default function UploadSlip() {


    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const { uploadAPI, userWallet, authUser } = getUser()

    const walletCheck = userWallet.find(function(id) {
        if(id.user.id === authUser.id)
        return ('Okay');
    }
    )
    const uploadSlipPic = async input => {
        try {

            const formData = new FormData();
            formData.append('userWalletId', walletCheck.id)
            formData.append('slip', input)
            setLoading(true);
            await uploadAPI(formData).then(() => {
                alert('Upload Success')
                return navigate("/")
            });

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return <div className='text-2xl '>
        <SlipButton
            title="UploadSlip"
            onSave={uploadSlipPic} />

    </div>
}