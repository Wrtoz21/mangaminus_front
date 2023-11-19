
export default function AddMangaName({ uploadField, setUploadField}) {
    
    return (<div>
        Manga Name :<input
            className="p-1"
            type="text"
            placeholder="AddMangaName"
            defaultValue={uploadField.name}
            onChange={(e) =>
               {
               return setUploadField(prev => ({ ...prev, name: e.target.value }))}} />
    </div>
    )


}