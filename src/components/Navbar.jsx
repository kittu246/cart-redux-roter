
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1>Shopping Cart</h1>
        <div>
            <NavLink className='link'  to='/'> Home Page</NavLink>
            <NavLink className='link' to='/cart'> Cart Page</NavLink>

        </div>
        
    </nav>
  )
}

export default Navbar