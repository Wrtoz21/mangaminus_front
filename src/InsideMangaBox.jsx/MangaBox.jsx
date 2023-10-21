import { useNavigate } from "react-router-dom";
import MangaImg from "./MangaImage";


export default function MangaBox({e}) {

  const navigate = useNavigate()

  return (<div className="p-2" >
    <MangaImg e={e}/>



  </div>)
}