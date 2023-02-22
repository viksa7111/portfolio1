import React from "react"
import img1 from '../Assets/Twitter.png'
import img2 from '../Assets/Instagram.png'
import img3 from '../Assets/Facebook.png'

export const Footer = () => {
    return (
        <footer>
            <a href="https://twitter.com/viksa7111"><img src={img1} alt="Twitter" className="a" /></a>
            <a href="https://instagram.com/vicky_panwar__?igshid=YmMyMTA2M2Y="><img src={img2} alt="Instagram" className="b" /></a>
            <a href="https://www.facebook.com/viksaa7111/"><img src={img3} alt="Facebook" className="c" /></a>
        </footer>
    )
}
