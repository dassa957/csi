'use client';

import Link from "next/link";
import Image from "next/image";
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='flex justify-between w-full nav_container'>
            <div className='logo_container'>
                <Link href="/">
                    <Image 
                        src='/assets/images/logo-333.png'
                        alt="coffee stack innovations logo"
                        width={150}
                        height={50}
                        className="logo_img"
                    />
                </Link>
            </div>
            <div className={toggleMenu ? 'links_active' : 'links'}>
                <Link href='/' className="link" onClick={() => setToggleMenu(false)}>Home</Link>
                <Link href='#services' className="link" onClick={() => setToggleMenu(false)}>Services</Link>
                <Link href='#about' className="link" onClick={() => setToggleMenu(false)}>About us</Link>
                <Link href='#contact' className="link" onClick={() => setToggleMenu(false)}>Contact us</Link>
            </div>
            <div className="navbar_icon" onClick={() => setToggleMenu(!toggleMenu)}>
                <Image
                    src={toggleMenu ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'}
                    width={28}
                    height={28}
                    alt="menu icon"
                />
            </div>
        </nav>
    );
}

export default Navbar;
