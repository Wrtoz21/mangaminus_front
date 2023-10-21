import { useNavigate } from "react-router-dom";

export default function MangaImg({e}) {

    const navigate = useNavigate()

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
                <div>oda</div>
            </div>
            <hr />
            <div className="flex justify-between">

            <div>ตอนล่าสุด 99</div>
            <div className="bg-red-500 rounded-2xl p-1 text-orange-950 text">{e.mangaPrice}:Coin</div>
            </div>

        </div>
    </div>



}