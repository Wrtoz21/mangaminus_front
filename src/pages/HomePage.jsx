import { useState, useEffect } from "react";
import Footer from "./Footer";
import MangaAll from "./MangaAll";
import axios from "../config/axios";
import { Children } from "react";
import { getUser } from "../hooks/get-user";
import MangaBox from "../InsideMangaBox.jsx/MangaBox";

export default function HomePage() {



    const { downloadData, manga } = getUser()
    console.log(manga.distinctA)
    console.log(manga.manga)
    return (
        <div className='flex' >
            <MangaAll onbeforeprint={downloadData} className="hidden" />
            <div className="grid grid-cols-5 w-10/12 m-10 gap-4 ">
                {manga.manga.map((e) => {
                    return <div key={e.id} >
                        <MangaBox e={e}>
                        </MangaBox>
                    </div>
                })}
            </div>

        </div>
    );
}