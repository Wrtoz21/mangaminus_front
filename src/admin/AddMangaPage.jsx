
export default function AddMangaPage({uploadPicPage,setUploadPicPage}) {

    return (<div className="flex gap-2 justify-start items-center "> 
        <div>Page</div>
        <input
            className="p-1"
            type="file" 
            placeholder="MangaPage"
            onChange = {e => {
                if(e.target.files[0]) {
                    setUploadPicPage(e.target.files[0])
                }
            }} />
    </div>
    )
    
        
   
}