import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';
import {images} from '../../constants'
import bg from '../../assets/front-page-bg.png';
const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
  <div className='app__wrapper_info'>
<SubHeading title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
{/* <h1 className='app__header-h1' >HELPCARE</h1> */}
<p className='p__opensans' style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
  </div>
 <div className='app__wrapper_img'>
{/* <img src={bg} alt="header img"></img> */}
 </div>
  </div>
);

export default Header;
