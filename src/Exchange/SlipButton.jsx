import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useState } from 'react';

export default function SlipButton({ onSave }) {

    const [file, setFile] = useState({})


    const inputUpload = useRef(null);

    return <div>
        <input type="file"
            className="hidden"
            ref={inputUpload}
            onChange={e => {
                console.log(e)
                if (e.target.files[0]) {
                    setFile(e.target.files[0])
                }
            }} />
        <button
            onClick={() => inputUpload.current.click()}
            className='flex rounded-md gap-2 justify-center items-center w-full bg-gray-300 text-xl p-3'>
            <div className='flex bg-gray-100 p-2 rounded-md'>
                <FontAwesomeIcon icon={faUpload} />
                <div>Upload File</div>
            </div>
            <div>Max file size 10MB.</div>
        </button>

        <div className='flex flex-col items-center p-2'>
            <button onClick={() =>{
            
                onSave(file)}} className='bg-green-600 text-white rounded-full p-2' >แจ้งโอนเงิน</button>
        </div>
    </div>
}