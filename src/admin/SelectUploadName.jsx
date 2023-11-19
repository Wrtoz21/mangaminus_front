export default function SelectUploadName({uploadField, setUploadField, manga}){
    const handleOnChange = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setUploadField(prev => ({ ...prev, mangaName: e.target.value }))
    }
    return (<div className="flex gap-2">
        <label htmlFor="mangaNameP">Name</label>
        <select 
        onChange={handleOnChange} id="mangaNameP" name='mangaName' className="w-48">
            <option>select</option>
            {manga?.mangaAll.map((e,index) => {
                return <option key = {index} value={e.mangaName}>{e.mangaName}</option>
            })}
        </select>
        </div>
    )
}