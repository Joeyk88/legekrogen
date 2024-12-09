import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <img src='src/assets/logo/legekrogen_logo.png' 
      alt='legekrogen_logo'
      className={isOpen ? 'logo hidden' : 'logo'} />
      <div className='burger-menu' onClick={toggleMenu}>
        {isOpen ? <IoClose size = {36} /> : <GiHamburgerMenu size ={36} />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to='/'>Forside</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Produkter</NavLink>
        </li>
        <li>
          <NavLink to='/faq'>FAQ</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Kundeklubben</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Backoffice</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
