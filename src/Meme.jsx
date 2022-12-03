import memesData from "./memesData"
import { useState } from 'react'

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[random].url)
    }

    
    return (
        <div className="main">
            <section className="form">
                <div className="input-container">
                    <input type="text" placeholder="Top text" />
                    <input type="text" placeholder="Bottom text"/>
                </div>
                <button className="button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </section>
            {<img src={memeImage} />}
        </div>
    )
}