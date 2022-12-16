import React from 'react'
import Logo from '../images/logo.png'
import './Navbar.css';

// const nav = document.getElementById('menu');
// const btn = document.getElementById('menu-btn');
// if(btn){
//   btn.addEventListener('click', () => {
//     btn.classList.toggle('open');
  
//     nav.classList.toggle('flex');
//     nav.classList.toggle('hidden');
//   })
// }
const nav = document.getElementById('menu');
  const btn = document.getElementById('menu-btn');
const responsive = () => {
  // console.log('hiiiiii');
  
  btn.classList.toggle('open');
  
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}


function Navbar() {
  return (
    <section>
    <nav className='relative container mx-auto p-6 '>
    <div className="flex items center justify-between">
       <div>
       <img className='img-logo' src={Logo} />
       </div>
       <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-btnColorHover 
         px-6 hover:rounded-full hover:bg-btnColor hover:text-white p-3 font-bold">Home</a>
        <a href="#about" className="hover:text-btnColorHover font-bold
         px-6 hover:rounded-full hover:bg-btnColor hover:text-white p-3">About Us</a>
        <a href="#features" className="hover:text-btnColorHover font-bold
         px-6 hover:rounded-full hover:bg-btnColor hover:text-white p-3">Why Us</a>
        <a href="#contact" className="hover:text-btnColorHover font-bold 
        px-6 hover:rounded-full hover:bg-btnColor hover:text-white p-3">Contact</a>
       </div>
       <div className='flex'>
       <a href="#" className="hidden md:block font-bold p-3 px-6  text-textBlack 
        rounded-full baseline hover:text-btnColorHover">
       Login
       </a>
       <a href="/" className="hidden 
        md:block p-3  font-bold px-6 
        text-white bg-btnColor
        rounded-full baseline hover:bg-btnColorHover">
        Sign up
       </a>
       </div>
       <button id="menu-btn" onClick={responsive}
       className=" mt-5 block hamburger  md:hidden focus:outline-none ">
         <span className="hamburger-top"></span>
         <span className="hamburger-middle"></span>
         <span className="hamburger-bottom"></span>
       </button>
    </div>
    <div className="md:hidden">
      <div id="menu" className="absolute  flex-col items-center hidden self-end  py-8 mt-10 
      space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6
      drop-shadow-md">
      <a href="#home" className="hover:bg-darkGreyishBlue">Home</a>
      <a href="#about" className="hover:text-darkGreyishBlue">About Us</a>
      <a href="#features" className="hover:text-darkGreyishBlue">Why Us</a>
      <a href="#contact" className="hover:text-darkGreyishBlue">Contact</a>
     </div>
    </div>
    </nav>
    </section>
  )
}

export default Navbar