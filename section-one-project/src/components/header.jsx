import reactLogo from '../assets/react-logo.png'

function Header(){
    return (
        <header className="header">
            
            <img src={reactLogo} alt="React Logo" />
            
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;