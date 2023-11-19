
export default function AddMangaPage({uploadPicPage,setUploadPicPage}) {

    return (<div className="flex gap-2 "> 
        <div>Page</div>
        <input
            className="p-1"
            type="file" multiple
            placeholder="MangaPage"
            onChange = {e => {
                console.log(e.target.files)
                if(e.target.files) {
                    setUploadPicPage(e.target.files)
                }
            }} />
    </div>
    )
    
        
   
}