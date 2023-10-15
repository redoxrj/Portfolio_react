import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import  Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/me3.png'
// import me from '../assets/vg.png'
import '../styles/home.scss'


const Home = () => {
    const clientsCount = useRef(null)
    const projectsCount = useRef(null)
    const animationClientsCount =()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=>(clientsCount.current.textContent =v.toFixed()),
        })
    }
    const animationProjectsCount =()=>{
        animate(0,30,{
            duration:1,
            onUpdate:(v)=>(projectsCount.current.textContent =v.toFixed()),
        })
    }
   
  return (
    <>
    <div id="home">
        <section>
            <div>
                <motion.h1 initial={{x:'-100%',opacity:0}} whileInView={{x:'0',opacity:1}} transition={{delay:'0.1',ease:'anticipate'}}>
                    Hi, I Am <br /> Rajnish Kumar
                </motion.h1>

                <Typewriter options={{
                    strings:['A Frontend Developer','A Full-Stack Developer'],
                    autoStart:true,
                    loop:true,
                    wrapperClassName:'typewriterpara',
                    cursorClassName:'typewritercursor',

                    }}/>

                <div className='links'>
                <a href="mailto:rjrajnish1729@gmail.com">Hire Me</a>
                <a href="https://drive.google.com/file/d/1yd3ARnYp5pIB6PFTz6tN9-bnohE_lnNn/view?usp=sharing" target={'_blank'} rel="noreferrer">Resume <BsArrowUpRight/></a>
             

                </div>   

                <article className='special'>
                    <p>+ <motion.span ref={clientsCount} whileInView={animationClientsCount}></motion.span></p>
                    <span>Clients Worldwide</span>
                </article> 

                <aside>
                <article className='special2'>
                    <p>+ <motion.span ref={projectsCount} whileInView={animationProjectsCount} ></motion.span></p>
                    <span>Projects Done</span>
                </article> 

                <article data-special>
                    <p>Contact</p>
                    <span>rjrajnish1729@gmail.com</span>
                </article> 
                </aside>
                
            </div>
            
        </section>


        <section >
            <img  src={me} alt="Rajnish Kumar"  />
        </section>
        <BsChevronDown/>
    </div>
      
    </>
  )
}

export default Home
