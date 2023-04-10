import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link } from "react-router-dom";
import Register from '../../Pages/Register';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
const [toggleMenu,setToggleMenu]=useState(false);
  return (
  <div className='app__navbar'>
    <div className='app__navbar-logo'>
<img src={images.gericht} alt="logo image"></img>
    </div>

    <ul className='app__navbar-links'>
      <li className='p__opensans'>
<a href='#home'>Home</a></li>
<li className='p__opensans'>
<a href='#About'>About</a></li>

<li className='p__opensans'>
<a href='#Contact'>Contact</a></li>
<li className='p__opensans'>
<Link to="/Register">Login</Link></li>
<li className='p__opensans'>
<Link to="/Register">Register</Link></li>
    </ul>
{/* <div className='app__navbar-login'>
<a href='#login' className='p__opensans'>Log In / Register</a>


</div> */}

<div className='app__navbar-smallscreen'>
<GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)} />

{toggleMenu&& (


<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
<MdOutlineRestaurantMenu color="#fff" fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
<ul className='app__navbar-smallscreen_links'>
      <li className='p__opensans'>
<a href='#home'>Home</a></li>
<li className='p__opensans'>
<a href='#About'>About</a></li>

<li className='p__opensans'>
<a href='#Contact'>Contact</a></li>
<li className='p__opensans'>
<Link to="/Register">Login</Link></li>
<li className='p__opensans'>
<Link to="/Register">Register</Link></li>
    </ul>
</div>
)}

</div>
  </div>);
}

export default Navbar;
