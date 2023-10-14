import Modal from "../components/Modal";
// import { getUser } from "../hooks/get-user";
import LoginForm from "./LoginForm";

export default function LoginBox({ onClose }) {
    return (<>
        <Modal className="absolute" onClose={onClose} >
            <LoginForm onClose={onClose}/>
            
        </Modal>
    </>
    )
}