import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../hooks/get-user";
import { useState } from "react";
import Loading from "../components/Loading";

export default function MangaDetail() {
    const { mangaId } = useParams();
    const { manga } = getUser();
    const [epOpen, setEpOpen] = useState(false);

    // Check if manga or its properties are defined before using find
    if (!manga || !manga.mangaAll || !manga.mangaWriter || !manga.mangaAllEpisode) {
        return <Loading/>; // or handle the loading state as appropriate
    }
    console.log(manga.mangaAllEpisode)

    const mangaT = manga.mangaAll.find((e) => { return e.id == mangaId })
    const writer = manga.mangaWriter.find((e) => { return e.id === mangaT.writerId })
    const episode = manga.mangaAllEpisode.find((e) => { return e.mangaNameNCoverId == mangaT.id })
    console.log(episode)
    // console.log(episode)
    return <div>
        <div className='flex justify-center p-3 text-2xl'>
            <div className='flex w-4/6  bg-orange-500 p-3'>
                <div className='p-2'>
                    <img src={mangaT.mangaCover} alt="my-hero" />
                </div>
                <div className='grid gird-col w-8/12 p-2 gap-2'>
                    <div className="bg-white p-3">
                        <div>ชื่อเรื่อง {mangaT.mangaName}</div>
                        <div>ชื่อผู้แต่ง {writer.writerName}</div>
                    </div>
                    <div className="bg-white p-3" >{mangaT.detail}</div>
                </div>

            </div>

        </div>
        <div className='flex justify-center p-3 text-2xl'>
            <div className='flex w-4/6  bg-orange-500'>

                <div className='grid gird-col w-8/12 p-3 gap-2'>
                    <div className="bg-white p-3 m-3">
                        <div>
                            <button className="bg-blue-500 p-2 rounded-xl" onClick={() =>{
                                return setEpOpen(!epOpen)
                            }}>Episode{episode.episode}</button>
                            <div>
                               {epOpen && manga.mangaAllEpisode.map((e) => {
                                    if (e.mangaNameNCoverId == mangaT.id) {
                                        return <img key={e.id} src={e.mangaSrc} alt="" />
                                    }

                                })}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>

}