// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Fragment, useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button'
import './AppNavbar.css'
import UserContext from '../UserContext';
import CartContext from './context/cart/CartContext'


export  default function AppNavbar() {

  const { cartItems, showHideCart } = useContext(CartContext)

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  const {user} = useContext(UserContext);
  return (
    
     <>
        <nav className='navbar'>
                <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    ShoeShop
                    <i class="fas fa-signature"></i>
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu} exact>Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/product' className='nav-links' onClick={closeMobileMenu} exact>Product</Link>  
                    </li>
                
                    { (user.id !== null) ?

                        <li className='nav-item'>
                          <Link to='/logout' className='nav-links' onClick={closeMobileMenu} exact>Logout</Link>
                        </li>
                      :
                        <Fragment> 
                          <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu} exact>Login</Link>
                          </li>
                          <li className='nav-item'>
                            <Link to='/register' className='nav-links' onClick={closeMobileMenu}exact>Sign Up</Link>
                          </li> 
                        </Fragment>

                    }

                    <div className='nav-item '>
                       <i class="fa fa-shopping-cart" aria-hidden="true" onClick={showHideCart}/>
                       {cartItems.length> 0 && ( 
                          <div className="item__count">
                            <span>{cartItems.length}</span>
                          </div>
                        )}
                    </div>
               
                  </ul>
                {/* {button && <Button buttonStyle='btn--primary'>Cart</Button>}*/}
                </div>
              </nav>    
     </>
  )
}

//<Link to='/cart' className='nav-links' onClick={closeMobileMenu} exact>Cart</Link>