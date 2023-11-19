import { useParams } from "react-router-dom";
import { getUser } from "../hooks/get-user";
import { useState } from "react";
import Loading from "../components/Loading";

export default function MangaDetail() {
    const { mangaId } = useParams();
    const { manga, authUser,deleteManga } = getUser();
    const [epOpen, setEpOpen] = useState(false);
    const handleDelete = ((e) => {
        e.preventDefault()
        setDeleteConfirm((prev) => !prev)
    })

    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const handleDeleteManga = async (e) => {
        e.preventDefault()
        try {
            await deleteManga(input)
        } catch (error) {

        }

    }

    if (!manga || !manga.mangaAll || !manga.mangaWriter || !manga.mangaAllEpisode) {
        return <Loading />;
    }
    console.log(manga.mangaAllEpisode)

    const mangaT = manga.mangaAll.find((e) => { return e.id == mangaId })
    const writer = manga.mangaWriter.find((e) => { return e.id === mangaT.writerId })
    const episode = manga.mangaAllEpisode.find((e) => { return e.mangaNameNCoverId == mangaT.id })
    console.log(episode)
    return <div>
        {deleteConfirm && <div
            className=" w-full h-full items-center absolute justify-center flex">
            <div className="w-80 h-32 justify-center flex items-center bg-gray-800 opacity-95 text rounded-3xl gap-2 text-4xl">
                <button onClick={handleDeleteManga}
                    className="bg-green-600 p-2 opacity-100 rounded-full">Confirm</button>
                <button
                    onClick={() => {
                        setDeleteConfirm(!deleteConfirm)
                    }}
                    className="bg-red-600 p-2 opacity-100 rounded-full">Cancel</button>
            </div>
        </div>}
        <div className='flex justify-center p-3 text-2xl'>
            <div className='flex w-4/6  bg-orange-500 p-3'>
                <div className='p-2'>
                    <img src={mangaT.mangaCover} alt="my-hero" />
                </div>
                <div className='grid gird-col w-8/12 p-2 gap-2'>
                    <div className="bg-white p-3 justify-between flex flex-col">
                        <div>

                            <div>ชื่อเรื่อง {mangaT.mangaName}</div>
                            <div>ชื่อผู้แต่ง {writer.writerName}</div>
                        </div>
                        <div>

                            {authUser?.userRole === "ADMIN" && <div className=" flex place-items-end justify-end ">
                                <button
                                    className="text-white bg-red-600 p-1 rounded-xl text-lg"
                                    onClick={handleDelete}>
                                    delete Manga
                                </button>
                            </div>}
                        </div>
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
                            <button className="bg-blue-500 p-2 rounded-xl" onClick={() => {
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