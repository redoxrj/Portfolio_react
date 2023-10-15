import React from 'react'
import '../styles/projects.scss'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../assets/data.json'
import {BsArrowUpRight} from 'react-icons/bs';

const Projects = () => {
  return (
    <>
<div id="projects">
    <h2>TOP PROJECTS</h2>
    <section>
        <article>
            <Carousel showArrows={false} showThumbs={false} showIndicators={false} infiniteLoop showStatus={false} interval={1300} autoPlay>
                {data.projects.map((item)=>(
                    <div key={item.title} className='projectItem'>
                        <img src={item.imgSrc} alt={item.title}/>
                        <aside>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="link2">
                            <a href={item.url} target={'_blank'}>
                                <button>View Live <BsArrowUpRight/></button>
                                
                            </a>
                            <a href={item.github} target={'_blank'}>
                            <button>Github Repo</button>
                                
                            </a>

                            </div>
                           
                        </aside>

                    </div>
                ))}

            </Carousel>
        </article>
    </section>
    
</div>
    </>
  )
}

export default Projects
