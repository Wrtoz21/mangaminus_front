import { useNavigate, useParams } from "react-router-dom";

export default function MangaImg({ e }) {
    const navigate = useNavigate()

    return <div
        className='p-1 border border-black cursor-pointer text-xl rounded-lg h-5/6 shadow-2xl'
        onClick={() => { return navigate(`/title/${e.id}`) }}
    >
        <div className="w-fit ">
            <img className="w-96 flex p-1"
                src={e.mangaCover} alt="" />
        </div>
        <div className="border border-black p-2">
            <div>
                <div className="text-xl">{e.mangaName}</div>
            </div>
            <hr />
            <div className="flex justify-between">

            </div>

        </div>
    </div>



}