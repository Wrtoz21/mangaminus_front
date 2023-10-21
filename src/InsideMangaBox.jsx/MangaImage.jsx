import { useNavigate } from "react-router-dom";
import { getUser } from "../hooks/get-user";

export default function MangaImg({ e }) {
    const { manga } = getUser()
    const navigate = useNavigate()

    console.log(manga)
    return <div
        className='p-1 border border-black cursor-pointer text-xl rounded-lg h-5/6 shadow-2xl'
        onClick={() => { return navigate('/manga-detail') }} >
        <div className="w-fit ">
            <img className="w-96 flex p-1"
                src={e.imageCover} alt="" />
        </div>
        <div className="border border-black p-2">
            <div className="grid grid-cols-2">
                <div>{e.mangaName}</div>
                <div>{e.writeName}</div>
            </div>
            <hr />
            <div className="flex justify-between">
                <div>
                    {manga.manga.map((e) => {
                        return <>
                            <div>{e.mangaName}</div>
                            <div className="bg-red-500 rounded-2xl p-1 text-orange-950 text">{e.mangaPrice}:Coin</div>
                        </>
                    })}
                </div>
            </div>

        </div>
    </div>



}