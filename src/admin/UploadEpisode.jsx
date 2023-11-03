import { useState } from "react";
import { getUser } from "../hooks/get-user";
import AddEpisode from "./AddEpisode";
import AddMangaPage from "./AddMangaPage";
import AddPrice from "./AddPrice";
import AddMangaName from "./AddMangaName";
import AddMangaNumberPage from "./AddMangaNumberPage";


export default function UploadEpisode() {

    const [uploadField, setUploadField] = useState({})

    const { uploadEpisode } = getUser()
    const [uploadPicPage, setUploadPicPage] = useState({})
    const uploadAdmin = async e => {
        e.preventDefault()
        try {

            const formData = new FormData();
            formData.append("mangaName", uploadField.name)
            formData.append("mangaPrice", uploadField.price)
            formData.append("episode", uploadField.episode)
            formData.append("numberPage", uploadField.numberPage)
            formData.append("mangaPicPage", uploadPicPage);
            await uploadEpisode(formData).then(() => {
                alert('Upload success')
            })
        } catch (error) {
            console.log(error)
        }
    }
    return <div className="bg-slate-400 border border-black flex gap-2 text-xl p-2" >
        <form
            onSubmit={uploadAdmin}
            className="flex flex-col min-w-fit border border-black rounded-md">
            <div className="flex flex-col p-3 gap-4">
                <AddMangaName uploadField={uploadField}
                    setUploadField={setUploadField} />
                <AddPrice uploadField={uploadField}
                    setUploadField={setUploadField} />
                <AddMangaNumberPage uploadField={uploadField}
                    setUploadField={setUploadField} />
                <AddEpisode uploadField={uploadField}
                    setUploadField={setUploadField} />
                <AddMangaPage uploadPicPage={uploadPicPage}
                    setUploadPicPage={setUploadPicPage} />
                <button type="submit"
                    className=" justify-end w-40 bg-yellow-500 border-2 rounded-full border-teal opacity-75  shadow text-xl text-pink-darker" >
                    Upload</button>
            </div>
        </form >
    </div>


}