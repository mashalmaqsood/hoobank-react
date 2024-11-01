import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOppen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev)=> !prev)
    }

  return (
    <section className='nav'>
        <a href='/' className='nav__brand'>
        <img src='https://res.cloudinary.com/dp7hicpjt/image/upload/v1730360086/logo_ksjh1h.png' width={100} alt='logo'/>
        </a>
        <img
          className="icon nav__toggler"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730364202/menu_p5zagd.png"
          alt="menu"
          onClick={toggleMenu}
        />
        <ul className={`list nav__list ${isMenuOppen ? "show" : ""}`}>
            <li className='nav__item'>Home</li>
            <li className='nav__item'>About Us</li>
            <li className='nav__item'>Features</li>
            <li className='nav__item'>Solution</li>
        </ul>
    </section>
  )
}

export default Navbar
