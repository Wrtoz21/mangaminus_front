import Route from "./router/Route";
import { ToastContainer } from 'react-toastify';
import { getUser } from './hooks/get-user'
import Loading from "./components/Loading";

export default function App() {
  const { initialLoading } = getUser()
  if (initialLoading) {
    return <Loading />
  }
  return <div >
    <Route />
    <ToastContainer

    />
  </div>
}
