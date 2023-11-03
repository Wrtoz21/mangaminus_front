
export default function AddMangaFile({uploadPicPage,setUploadPicPage}) {

    return (<div className="flex gap-2 "> 
        <div>Files</div>
        <input
            className="p-1"
            type="file" 
            placeholder="MangaFile"
            onChange = {e => {
                if(e.target.files[0]) {
                    setUploadPicPage(e.target.files[0])
                }
            }} />
    </div>
    )
    
        
   
}