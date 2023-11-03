
export default function AddPrice(props) {
    const {uploadField,setUploadField} = props
    return (<div className="flex gap-2 ">

        <div>Price</div>
        <input
            className="p-1"
            type="text"
            placeholder="AddPrice"
            // defaultValue={uploadField.price}
            defaultValue={uploadField.price}
            onChange={(e) =>
            setUploadField(prev => ({...prev, price: e.target.value }))} />
            
    </div>
    )



}