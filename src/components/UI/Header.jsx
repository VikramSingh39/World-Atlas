import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
      <div className="grid navbar-grid">
        <div className="logo">
            <NavLink to="/">
            <h1 className='text-5xl font-bold'>World Atlas</h1>
            </NavLink>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li> 
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                 <li>
                    <NavLink to="/country">Country</NavLink>
                </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink >
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header