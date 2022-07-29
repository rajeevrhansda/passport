import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">Lama App</span>
            <ul className="list">
                <li className="listItem">
                    <img 
                    className='avatar' 
                    src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" />
                </li>
                <li>John Doe</li>
                <li>Logout</li>
            </ul>

        </div>
    )
}

export default Navbar