import logo from '../public/assets/header-logo.png'

export default function Header() {
    return (
        <header className='nav-bar'>
            <div className="header">
                <img src={logo} alt="header-logo" className='header-logo'/>
                <h3 className='header-title'>Meme Generator</h3>
            </div>
        </header>
    )
}