import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    
    return (
        <Link to="/">
            <header >
                <img className="w-6/6"
                src="https://res.cloudinary.com/dhepjrdz1/image/upload/v1696900944/myMangaMinus/image_10_lrn0xn.png" 
                alt="MangaMinusHeader" />
            </header>
        </Link>
    )
}