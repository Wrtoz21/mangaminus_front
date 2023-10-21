import { useNavigate } from "react-router-dom";

export default function MangaImg() {

    const navigate = useNavigate()

    return <div
        className='p-1 border border-black cursor-pointer text-xl'
        onClick={() => { return navigate('/manga-detail') }} >
        <div className="w-5/5 ">

            <img src="https://res.cloudinary.com/dhepjrdz1/image/upload/v1697103482/myMangaMinus/rwnwstxlvujjylbaxy57.jpg" alt="One piece" />
        </div>
        <div className="border border-black p-2">
            <div className="grid grid-cols-2">
                <div>onepiece</div>
                <div>oda</div>
            </div>
            <hr />
            <div>ตอนล่าสุด 99</div>

        </div>
    </div>



}