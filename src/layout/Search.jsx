import { IconSearch } from "../icons";

export default function Search(){
    return (<div className ="grid grid-cols-2 gap-2">
        {/* <div className="flex justify-center" >Search</div> */}
        <div className="flex justify-end">
            <IconSearch/>
        </div>
    </div>)
}