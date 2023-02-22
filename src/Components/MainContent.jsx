import React from "react"
import img from '../Assets/Mail.png'
import img1 from '../Assets/linkedin.png'

export default function MainContent() {
    return (
        <section>
        <h1>Vikas Panwar</h1>
        <h3>Frontend Developer</h3>
        <p className="web--intro"><a href="https://instagram.com/vicky_panwar__?igshid=YmMyMTA2M2Y=">Vikas Panwar.website</a></p>
        <a href="mailto:vkparmar003@gmail.com" ><button className="email"><img src={img} alt="mail" className="email1"/> Email</button></a>
        <a href="https://www.linkedin.com/in/viksa7111/"><button className="linkedin"><img src={img1} alt="mail" className="linkedin1"/>LinkedIn</button></a>
        <h2 className="abt">About</h2>
        <p className="abt1">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className="int">Interests</h2>
        <p className="int1">Reader. Travel geek. Food expert. Music scholar. Internet fanatic. Bacon buff. Entrepreneur.  Pop culture ninja. Coffee fanatic.</p>
        </section>
    )
}
