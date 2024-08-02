import './Footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='main'>
            <div className="footer_logo_container">
                <Image 
                    src='/assets/images/logo-333.png'
                    width={200}
                    height={50}
                />
            </div>
            <div className='footer_contact'>
                <h1 className='contact_text'>Contact</h1>
                    <a href='/'>coffeestackinnovations.com</a>
                    <a href="mailto:coffeestackinnovations@gmail.com">coffeestackinnovations@gmail.com</a>
                    <a href="https://wwww.facebook.com/coffeestackinnovations">Facebook</a>
                    <a href="https://www.linkedin.com/company/104728293/">LinkedIn</a>
                    <a href="https://wa.me/94767270266">Whatsapp(quick help)</a>
            </div>
            <div className='footer_menu'>
                <h1 className='contact_text'>Navigation</h1>
                <a href="/">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About us</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <div className='author'>
            <p>&copy; Created by <a href="/">Coffee Stack Innovations</a> 2024</p>
        </div>
    </div>
  )
}

export default Footer