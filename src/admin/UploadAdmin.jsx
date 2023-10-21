import { useState } from "react";
import { getUser } from "../hooks/get-user";
import AddImageCover from "./AddImageCover";
import AddMangaName from "./AddMangaName";
import AddMangaPage from "./AddMangaPage";
import AddPrice from "./AddPrice";

export default function UploadAdmin() {

    const { uploadByADMIN } = getUser()


    const [uploadField, setUploadField] = useState({})
    const [uploadPic, setUploadPic] = useState({})
    const [uploadPicPage, setUploadPicPage] = useState({})

    const uploadAdmin = async e => {
        e.preventDefault()
        try {
            console.log(uploadField)

            const formData = new FormData();

            formData.append("mangaName", uploadField.name)
            formData.append("mangaPrice", uploadField.price)
            formData.append('mangaPic', uploadPic)
            formData.append('mangaPicPage', uploadPicPage)

            await uploadByADMIN(formData).then(() => {
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
            <div className="flex gap-2 p-2 ">
                <AddMangaName uploadField={uploadField}
                    setUploadField={setUploadField} />
                <AddPrice uploadField={uploadField}
                    setUploadField={setUploadField} />
            </div>
            <div className="flex flex-col ">
                <AddImageCover uploadPic={uploadPic}
                    setUploadPic={setUploadPic} />
                <div className="flex justify-between p-2">

                    <AddMangaPage uploadPicPage={uploadPicPage}
                        setUploadPicPage={setUploadPicPage} />
                    <button type="submit"
                        className=" w-40 bg-yellow-500 border-2 rounded-full border-teal opacity-75  shadow text-xl text-pink-darker" >
                        Upload</button>
                </div>
            </div>

        </form>
    </div>
}