import React from "react"
import "./About.css"


const About: React.FC = () => {
    return (
        <div className="about-container">
            <div className="image-div">
                <img src="/4707122.png" alt="my-vector" />
            </div>
            <div className="about-description">
                <div className="btn-container">
                    <button>About the developer</button>
                </div>
                <div className="description">
                    <p>
                        I'm Shiva Kumar, a Full Stack MERN developer who loves learning and is devoted to my craft. I keep improving my abilities to create amazing user experiences and high-quality performance. With 1 year in this field, I aim to push the limits of what we can do in web development. Each day, I work to build smooth easy-to-use, and beautiful interfaces that make users happy and meet their needs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About