
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        )
        ,
        children: [

            {
                path: '',
                element: <HomePage/>
            },

            {
                path: 'register',
                element: <RegisterPage />
            }

            // { path:'',element:<MangaPage/>}
        ]
    }


])

export default function Route() {
    return <RouterProvider router={router} />
}