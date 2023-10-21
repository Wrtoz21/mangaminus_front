export default function UserSelect({ admin,setUserSelect}) {
    return <div className="flex w-48 justify-center">
        <label htmlFor="userData" >UserSelect :</label>
        <select 
        onChange = {(e) => {
            e.preventDefault()
            return setUserSelect({User:e.target.value})
            // console.log(e)
        }}
        id="UserData" 
        name='user' 
        className="w-16">
            <option value="default">select</option>
            {admin.map(el => {
                return <option key={el.id} value={el.id}>
                    {el.username}
                </option>
            })}
        </select>
    </div>
}