import React from 'react';
import '../styles/footer.scss'
import { AiFillGithub,  AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
    <div>
      <img
        src={"https://res.cloudinary.com/dxveabdbw/image/upload/v1695476052/avatars/v8olel3fqlao5wi1xpkc.jpg"}
        alt="Founder"
      />

      <h2>Rajnish Kumar</h2>
      <p>Frontend Developer | Full-Stack Developer</p>
    </div>

    <aside>
      <h2>Social Media</h2>

      <article>
        
        <a href="https://www.linkedin.com/in/rajnish-kumar-redoxrj/" target={"_blank"}>
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/redoxrj" target={"_blank"}>
          <AiFillGithub />
        </a>
      </article>
    </aside>
    <a href="#home">
      <AiOutlineArrowUp />
    </a>
  </footer>
  )
}

export default Footer
