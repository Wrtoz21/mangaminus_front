import MangaBox from "../InsideMangaBox.jsx/MangaBox"

export default function MangaAll(){
    return (<div className='grid grid-cols-5 m-10'>
        <MangaBox/>
        
        <MangaBox/>
        <MangaBox/>
        <MangaBox/>
        <MangaBox/>
    </div>)
}