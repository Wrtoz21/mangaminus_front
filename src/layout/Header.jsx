import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import defaultImg from '../assets/Header-transformed.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    
    return (
        <Link to="/">
            <header >
                <img className="max-h-72 w-full object-fill overflow-hidden mx-auto rounded-b-lg flex justify-center items-center"
                src={defaultImg} 
                alt="MangaMinusHeader" />
            </header>
        </Link>
    )
}