import React from "react"
import img1 from '../Assets/dp1.jpeg'
export default function Header() {
    return (
        <>
        <header>
            <img src={img1} alt="Profile Face" className="header--profile" />
        </header>
        </>
    )
}
