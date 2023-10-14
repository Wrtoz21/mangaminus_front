import Footer from "./Footer";
import MangaAll from "./MangaAll";


export default function HomePage(){
    return (<div className='flex'>
        <MangaAll/>
        <Footer/>
        <div></div>
        <div></div>
    </div>)
}