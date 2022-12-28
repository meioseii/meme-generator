import { useState, useEffect } from 'react'


export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        meme.topText = "";
        meme.bottomText = ""
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