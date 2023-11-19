import MangaAll from "./MangaAll";
import { getUser } from "../hooks/get-user";
import MangaBox from "../InsideMangaBox.jsx/MangaBox";
import Loading from "../components/Loading";
import { useState } from "react";

export default function HomePage() {
    const { manga } = getUser();

   
    return (
        <div className='flex '
            >
            <div className="grid grid-cols-5 w-10/12 m-10 gap-4">
                {manga?.mangaAll?.map((e) => (
                    <div key={e.id}>
                        <MangaBox e={e}  />

                    </div>
                ))}
            </div>
        </div>
    );
}