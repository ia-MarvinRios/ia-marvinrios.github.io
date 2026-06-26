import './Header.css'
import profilePic from '../../assets/blank_profile_picture.jpg'

function Header() {
    return(
        <header className="hero">
            <nav className="nav container">
                <nav className="nav_image">
                    <img src={profilePic} alt="Marvin Raydel Rios Aguilar"/>
                </nav>
                <nav>
                    <h2 className="nav_name">Marvin Raydel Ríos Aguilar</h2>
                </nav>
            </nav>
        </header>
    )
}

export default Header