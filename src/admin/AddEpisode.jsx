export default function AddEpisode({ uploadField, setUploadField }) {
    console.log(uploadField)
    return (<div className="flex gap-2 p-1">
        <div>Episode</div>
        <input
            className="p-1"
            type="text"
            placeholder="AddEpisode"
            defaultValue={uploadField.episode}
            onChange={(e) =>
                setUploadField(prev => ({ ...prev, episode:e.target.value }))} />
    </div>
    )
}