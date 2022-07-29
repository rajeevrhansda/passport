import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user }) {
    return (
        <div className='navbar'>
            <span className="logo"><Link className='link' to='/'>Lama App</Link></span>
            {user ? (

                <ul className="list">
                    <li className="listItem">
                        <img
                            className='avatar'
                            src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </li>
                    <li className="listItem">John Doe</li>
                    <li className="listItem">Logout</li>
                </ul>
            ) : (
                <Link className='link' to='/login'>Login</Link>
            )}

        </div>
    )
}

export default Navbar