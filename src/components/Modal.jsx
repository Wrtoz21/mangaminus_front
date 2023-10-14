import { useEffect, useRef } from "react";


export default function Modal({ children, maxWidth = 30, onClose }) {

    const LoginEl = useRef(null)


    return (
        <>
            <div className="fixed inset-0 bg-gray-600 opacity-70 x-100" />
            <div className="fixed inset-0 z-30" onClick={(e) => {
                e.stopPropagation()
                onClose()
            }}>
                <div className="flex justify-center items-center min-h-full"   >
                    <div className="rounded-lg w-full bg-white shadow-2xl border" style={{ maxWidth: `${maxWidth}rem` }}>
                        <div>{children}</div>
                    </div>
                </div>

            </div>

        </>


    )
}