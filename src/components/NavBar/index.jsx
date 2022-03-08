import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion';
import Scroll from 'react-scroll'
import { Link } from 'react-scroll';


function NavBar() {

    const header = useRef()
    const [active, setMode] = useState(false)
    const [activeY, setActiveY] = useState("")

    function changeHeaderWhenScroll(){
      
        const height = header?.current?.clientHeight;
        if(scrollY >= height){
    
            setActiveY("activeY")
        }else{
            setActiveY("")
        }
        }

        if(process.browser){
            window.addEventListener('scroll', changeHeaderWhenScroll)
        }

  return (
    <motion.header  
        ref={header}
        className={active ? `header-open header ${activeY}` : `header ${activeY}`}
        >
       <a href='#'><span className='logo'>Shalom</span></a> 
            <nav className={active ? 'nav-open' : ''}>
            <ul className={active ? 'nav-open' : ''}>
               <li onClick={()=> {
                   setMode(false)
                Scroll.animateScroll.scrollToTop();
                   
                   }}><a href='#'>Início</a></li>
               <li><Link onClick={()=> {
                   setMode(false)
                if(window.innerWidth <= 768 && window.innerWidth > 425){
                    Scroll.animateScroll.scrollTo(925);

                }else if(window.innerWidth <= 425){
                    Scroll.animateScroll.scrollTo(650);

                }else{
                    Scroll.animateScroll.scrollTo(1160);

                }

                   }} to="">Viagens</Link></li>
               <li onClick={()=> setMode(false)}><a href='https://api.whatsapp.com/send?l=pt_br&phone=+55%20(28)%2099964-8132&text=Ol%C3%A1%20,%20Tenho%20interesse%20em%20viajar%20com%20voc%C3%AAs'>Contato</a></li>
            </ul>
        </nav>
                <div className={active ? 'social-open nav-social-media' : 'nav-social-media'}>
                 
                <a 
                href="https://api.whatsapp.com/send?l=pt_br&phone=+55%20(28)%2099964-8132&text=Ol%C3%A1%20,%20Tenho%20interesse%20em%20viajar%20com%20voc%C3%AAs"
                className='icon-social-nav'
                >
                 <FaWhatsapp color='#fff' size={26}/>
                </a>
                <a 
                href="https://www.facebook.com/shalompacotedeviagens" 
                className='icon-social-nav'
                >
                 <FiFacebook color='#fff' size={26}/>
                </a>
            </div>
            <AiOutlineMenu  
                className={active ? 'icon-menu menu-open' : 'icon-menu'} 
                color='#fff' 
                size={30} 
                onClick={() => setMode(!active)}
            />
            <AiOutlineClose 
                className={active ? 'icon-close close-open' : 'icon-close'} 
                color='#fff' 
                size={30} 
                onClick={() => setMode(!active)}
            />
    </motion.header>
    );
}

export default NavBar;