import { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "./LoginForm";

export default function LoginBox(){
    const [open,setOpen] = useState(false);
    return(
        <div className ="flex justify-center">
            <Modal>
                <LoginForm/>
            </Modal>
        </div>
    )
}