
export default function AddDiscribe({ uploadField, setUploadField }) {

    return (<div className="gap-2 p-1">
        <div>Discribe</div>
        <label htmlFor="comment" className="sr-only" >Your comment</label>
           <textarea 
           defaultValue={uploadField.discribe}
           onChange={(e) =>
               setUploadField(prev =>
                
                ({ ...prev, discribe: e.target.value }))}
           id="comment" 
           rows="4" className=" w-full px-0 text-xl text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a Discribe" ></textarea>
    </div>
    )
}
