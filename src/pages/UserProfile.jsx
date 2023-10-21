import { Navigate, useParams } from 'react-router-dom';
import axios from '../config/axios'
import { getUser } from '../hooks/get-user'
import { useEffect, useState } from 'react';
import ProfileInfo from '../features/ProfileImg';
import UserPurchased from '../features/UserPurchased';
import Admin from '../admin/Admin';

export default function UserProfile() {

    const { userProfileId } = useParams();
    const [profileUser, setProfileUser] = useState({});
    const [wallet, setWallet] = useState({});
    const { authUser } = getUser();
    const isAuthUser = authUser.id === +userProfileId

    useEffect(() => {
        axios
            .get(`/user/${userProfileId}`)
            .then(res => {
                setProfileUser(res.data.user)
                setWallet(res.data.wallet)
                

            })
            .catch(err => { console.log(err) })
    }, [userProfileId])

    return <div className=" bg-gradient-to-b from-gray-200 to-white shadow pb-4">
        {profileUser ?
            (
                profileUser.userRole == "ADMIN" ?
                    (<Admin />)
                    :
                    (<div className='flex flex-cols justify-center'>
                        <ProfileInfo 
                        profileUser={isAuthUser ? authUser : profileUser}
                        wallet={wallet}></ProfileInfo>
                        <UserPurchased ></UserPurchased>
                    </div>)
            )
            :
            (           
                 <Navigate to ="/"/>   
            )
        }
    </div>
}