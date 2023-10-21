
export default function AddImageCover({uploadPic,setUploadPic}) {
    console.log(<input/>)
    return (<div className="flex gap-2 justify-start items-center p-2 "> 
        <div>AddImageCover</div>
        <input
            className="p-1"
            type="file"
            placeholder="AddPrice"
            onChange = {e => {
                if(e.target.files[0]) {
                    setUploadPic(e.target.files[0])
                }
            }}
         />
    </div>
    )
    
        
   
}