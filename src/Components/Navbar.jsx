import  React from 'react'
import '../assest/CSS/Navbar.css'
import Logo from '../assest/Logo.svg'
const Navbar = ()=>{
return(
    <nav >
    <div className="container">
        <div className='d-flex justify-content-between align-items-center'>
            <ul  className='list-nav d-flex justify-content-between align-items-center'>
            <img src={Logo} alt="logo" className='logo-img' />
            <li className='item'>Home</li>
            <li className='item'> About Us</li>
            <li className='item'> Product & Service</li>
            <li className='item'> Blog</li>
            <li className='item'>Career</li>
        </ul>
        <div className='text-white'>En|AR</div>


        </div>
     
       
    </div>
  </nav>
)
}

export default Navbar