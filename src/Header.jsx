import logo from '../public/assets/header-logo.png'

export default function Header() {
    return (
        <nav className='nav-bar'>
            <div className="left-header">
                <img src={logo} alt="header-logo" className='header-logo'/>
                <h3 className='header-title'>Meme Generator</h3>
            </div>
            <div className="right-header">
                <h4 className='header-desc'>React Course - Project 3</h4>
            </div>
        </nav>
    )
}