
export default function AddMangaNumberPage(props) {
    const {uploadField,setUploadField} = props
    return (<div className="flex gap-2 ">

        <div>numberPage</div>
        <input
            className="p-1"
            type="text"
            placeholder="AddPrice"
            // defaultValue={uploadField.price}
            defaultValue={uploadField.numberPage}
            onChange={(e) =>
            setUploadField(prev => ({...prev, numberPage: e.target.value }))} />
            
    </div>
    )



}