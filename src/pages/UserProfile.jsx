import { useParams } from 'react-router-dom';
import axios from '../config/axios'
import { getUser } from '../hooks/get-user'
import { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';

export default function UserProfile() {


    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{}
    })
    const { userProfileId } = useParams();
    const [profileUser, setProfileUser] = useState({});
    const { authUser } = getUser();
    const isAuthUser = authUser.id === +userProfileId

    useEffect(() => {
        axios
            .get(`/user/${userProfileId}`)
            .then(res => {
                setProfileUser(res.data.user)
            })
            .catch(err => { console.log(err) })
    }, [userProfileId])
    return <div className="bg-gray-600">
        {profileUser ?
            (<>
                <div>asdkpsakdpa</div>
            </>)
            :
            (
                <>
                    <div>
                        dosakdopskapdjsapdjspa
                    </div>
                </>
            )
        }

    </div>
}