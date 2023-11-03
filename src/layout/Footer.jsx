import defaultLogo from '../assets/Header_preview_rev_1.png'
export default function Footer() {
    return <div className="bg-orange-600 min-h-fit bg-gradient-to-t from-orange-600 to-white">
        <div className="flex  text-3xl justify-around items-end ">
            <div>
                <div className='bo'>About Us</div>
                <div></div>
            </div>
            <div>Report</div>
            <div >
                <img src={defaultLogo} alt="logo" className='w-32' />
            </div>
            <div>License</div>
            <div>Help</div>
        </div>
    </div>
}