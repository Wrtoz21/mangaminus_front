
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import Authenticated from '../authen/Authenticated'
import UserProfile from '../pages/UserProfile'
import UserWallet from '../AboutUser/Userwallet'
import CoinExchange from '../Exchange/CoinExchange'
import ExchangeRate from '../Exchange/ExchangeRate'
import MangaDetail from '../InsideMangaBox.jsx/MangDetail'
import Admin from '../admin/Admin'

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
            },
            {
                path: 'user/admin', element: (
                    // <Authenticated>
                    <Admin />
                    // </Authenticated>
                )
            },
            { path: '/title/:mangaId', element: <MangaDetail /> }
        ],

    }
    ,
    {
        path: '/',
        element: (
            <>
                <Layout />
            </>
        )
        ,
        children: [
            {
                path: 'coin-exchange',
                element: <Authenticated>
                    <CoinExchange />
                </Authenticated>
            }
        ]




    },
    {
        path: '/',
        element: (
            <>
                <Layout />
            </>
        )
        ,
        children: [
            {
                path: 'exchange-rate',
                element:
                    <ExchangeRate />

            }
        ]




    }

])

export default function Route() {
    return <RouterProvider router={router} />
}