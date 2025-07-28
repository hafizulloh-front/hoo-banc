import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="container navbar-content">
         <div className="banc">
           <div className='svg'>
            <img src="./public/img/logo.svg" alt="" />
             <h2>Hoo <span className='hoo'>Bank</span></h2>
           </div> 
            <ul>
                <li><a href="!#">Home</a></li>
                <li><a href="!#">About Us</a></li>
                <li><a href="!#">Features</a></li>
                <li><a href="!#">Solution</a></li>
            </ul>
         </div>
       </div>
    </div>
  )
}

export default Navbar