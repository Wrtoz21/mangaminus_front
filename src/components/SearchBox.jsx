import { IconSearch } from "../icons";

export default function SearchBox() {
    return <div className="flex">
        <input placeholder="Search" className="w-10/12"/>
        <IconSearch />
    </div>
}