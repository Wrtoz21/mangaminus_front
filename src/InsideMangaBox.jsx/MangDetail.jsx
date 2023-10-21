import { useNavigate } from "react-router-dom";


export default function MangaDetail() {

    const navigate = useNavigate()

    return <div>
        <div className='flex justify-center p-3 text-2xl'>
            <div className='flex w-4/6  bg-orange-500'>
                <div className='p-2'>
                    <img src="https://mangaplus.shueisha.co.jp/drm/title/100080/title_thumbnail_portrait_list/313264.jpg?key=369ddfe562f7697bbe44c95bf8b0ea54&duration=86400" alt="my-hero" />
                </div>
                <div className='grid gird-col w-8/12 p-2 gap-2'>
                    <div className="bg-white p-3">
                        <div>ชื่อเรื่อง my hero academia</div>
                        <div>ชื่อผู้แต่ง</div>
                    </div>
                    <div className="bg-white p-3" >dsadsa</div>
                </div>

            </div>

        </div>
        <div className='flex justify-center p-3 text-2xl'>
            <div className='flex w-4/6  bg-orange-500'>
                <div className='p-2'>
                    <img src="https://mangaplus.shueisha.co.jp/drm/title/100080/title_thumbnail_portrait_list/313264.jpg?key=369ddfe562f7697bbe44c95bf8b0ea54&duration=86400" alt="my-hero" />
                </div>
                <div className='grid gird-col w-8/12 p-2 gap-2'>
                    <div className="bg-white p-3">
                        <div>ชื่อเรื่อง my hero academia</div>
                        <div>ชื่อผู้แต่ง</div>
                    </div>
                    <div className="bg-white p-3" >dsadsa</div>
                </div>

            </div>

        </div>
    </div>

}