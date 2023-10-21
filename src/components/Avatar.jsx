import defaultImage from '../assets/user.jpg'

export default function Avatar({className = 'h-44',src}){
    const defaultClass = "rounded-full aspect-square"
    const classes = defaultClass+ ' ' +className;


    return (
        
        <img src={src || defaultImage} alt="user" className={classes} />
    )
}