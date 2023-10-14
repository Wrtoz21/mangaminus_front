
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import Authenticated from '../authen/Authenticated'
import UserProfile from '../pages/UserProfile'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        )
        ,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'register', element: (<RegisterPage />) },
            {
                path: 'user/:userProfileId', element: (
                    <Authenticated>
                        <UserProfile />
                    </Authenticated>
                )
            }
        ]
    }

])

export default function Route() {
    return <RouterProvider router={router} />
}