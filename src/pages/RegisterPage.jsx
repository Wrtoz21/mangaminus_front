import Promotion from "../components/Promotion";
import RegisterBox from "../components/RegisterBox";

export default function RegisterPage(){
    return(<div className="flex justify-center items-center gap-4">
        <div>
            <Promotion/>
        </div>
        <div>
            <RegisterBox/>
        </div>
    </div>)
}