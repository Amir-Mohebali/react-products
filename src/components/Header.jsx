import { NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <div className='nav'>
        <NavLink to='/'>
            <h3 className='logo'>
                <span>Smart</span> Shop
            </h3>
        </NavLink>
        <ul className="nav-links">
            <li>
                <NavLink to='/'>Home</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/phones'>Phones</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/laptops'>Laptops</NavLink>
                <div className="underline"></div>
            </li>
            <li>
                <NavLink to='/products/tvs'>TVs</NavLink>
                <div className="underline"></div>
            </li>
        </ul>
        <div className="nav-controls">
            <div className="search-btn">
                <FaSearch />
            </div>
            <div className="cart-btn">
                <FaShoppingCart/>
                <div className="qty">0</div>
            </div>
        </div>
    </div>
  )
}

export default Header