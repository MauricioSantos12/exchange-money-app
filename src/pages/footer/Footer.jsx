import React from 'react'
import './footer.scss'
import { Github, Linkedin, Twitter, Mail } from 'feather-icons-react/build/IconComponents';


const Footer = () => {
  let year = new Date();
  year = year.getFullYear();
  return (
    <div className='container--footer'>
      <footer>
        <a href='https://www.linkedin.com/in/mauricio-santos-rebolledo-9a0924137/' target='_blank' aria-label="Open Linkedin profile" className='container--icon'> <Linkedin className='icon' /> </a>
        <a href='https://github.com/MauricioSantos12' target='_blank' className='container--icon' aria-label="Open Github profile"> <Github className='icon' /> </a>
        <a href='https://twitter.com/Maurici89494430' target='_blank' className='container--icon' aria-label="Open Twitter profile"> <Twitter className='icon' /> </a>
        <a href="mailto:mauricio.santosr12@gmail.com" target='_blank' className='container--icon' aria-label="Open Mail to contact me"> <Mail className='icon' /> </a>
      </footer>
      <div className='container--copy'>
        <p className="copy">Copyright {year} &copy; </p>
        <p className="copy">
            <a href="https://www.linkedin.com/in/mauricio-santos-rebolledo-9a0924137/" target="_blank"> {' '} Mauricio Santos Rebolledo</a>
        </p>
      </div>
    </div>
    
  )
}

export default Footer