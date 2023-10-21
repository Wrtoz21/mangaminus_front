
export default function AddMangaName({uploadField,setUploadField}) {

    return (<div className="flex gap-2 justify-center items-center"> 
        <div>Name</div>
        <input
            className="p-1"
            type="text"
            placeholder="AddMangaName" 
            defaultValue={uploadField.name}
            onChange={(e) => 
            setUploadField(prev =>({...prev,name:e.target.value}))}/>
    </div>
    )


}