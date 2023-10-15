import React from 'react'
import '../styles/testimonials.scss';

const Testimonials = () => {
  return (
    <div id='testimonials'>
        <h2>Testimonials</h2>
        <section>
            <TestimonialCard name={'Elon Musk'} feedback={'Amazing seems like you should the Tesla CEO'}/>
            <TestimonialCard name={'Sunder Pichai'} feedback={"Wow what a portfolio, meet me tomorrow!"}/>
            <TestimonialCard name={'Ramesh'} feedback={'tum toh heavy web developer ho bhai'}/>
        </section>
      
    </div>
  )
}

const TestimonialCard =({name,feedback})=>(
    <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>

)

export default Testimonials
