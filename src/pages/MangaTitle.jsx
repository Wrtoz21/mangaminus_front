import axios from "axios"
import { useEffect } from "react"

export default function MangaTitle(){
    
    const {mangaId} = useParams()
    const {manga} = getUser()

    useEffect(() =>{
        axios
        .get(`/manga/${mangaId}`)
        .then(res =>{
            
        })
        .catch(err => {console.log(err)})
    }),[mangaId]
    return <>
    <div>

    </div>
    </>
}