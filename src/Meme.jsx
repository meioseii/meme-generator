import memesData from "./memesData"
import { useState } from 'react'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <div className="main">
            <form>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" className="button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </form>

            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">{meme.randomImage !== "" && meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.randomImage !== "" && meme.bottomText}</h2>
            </div>
        </div>
    )
}