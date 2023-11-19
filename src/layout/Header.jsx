import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import defaultImg from '../assets/Header-transformed.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    
    return (
        <Link to="/">
            <header >
                <img className=" w-full object-center   "
                src="https://res.cloudinary.com/dhepjrdz1/image/upload/v1700365884/pv7jstgb9wnw5slagf79.png"
                alt="MangaMinusHeader" />
            </header>
        </Link>
    )
}