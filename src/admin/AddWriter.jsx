
export default function AddWriter({ uploadField, setUploadField }) {

    return (<div className="flex gap-2 p-1">
        <div>Writer</div>
        <input
            className="p-1"
            type="text"
            placeholder="AddWriterName"
            defaultValue={uploadField.writerName}
            onChange={(e) =>
                setUploadField(prev => ({ ...prev, writerName: e.target.value }))} />
    </div>
    )
}