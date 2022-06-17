import Logo from '../assets/LogoV7.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [ nav, setNav ] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#202124] text-gray-300">
            <div>
                <img 
                    src={ Logo } 
                    alt="logo" 
                    style={{ width: '66px'}}
                />
            </div>
            {/* menu */}
            <ul className='hidden md:flex '>
                <li>
                    <Link to="home"  smooth={true}  duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about"  smooth={true}  duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills"  smooth={true}  duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work"  smooth={true}  duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact"  smooth={true}  duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div 
                onClick={ handleClick }
                className='md:hidden cursor-pointer z-10'
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>    
                <li className='py-6 text-4xl '>
                    <Link onClick={ handleClick } to="home"  smooth={true}  duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl '>
                    <Link onClick={ handleClick } to="about"  smooth={true}  duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl '>
                    <Link onClick={ handleClick } to="skills"  smooth={true}  duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl '>
                    <Link onClick={ handleClick } to="work"  smooth={true}  duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl '>
                    <Link onClick={ handleClick } to="contact"  smooth={true}  duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease bg-blue-600'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/anel-dominguez-a4b42a117/"
                        >
                            Linkedin <FaLinkedin  size={ 30 }/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease bg-[#333333]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/Neno2113"
                        >
                            Github <FaGithub  size={ 30 }/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease bg-[#FAFAFB]'>
                        <a 
                            className='flex justify-between items-center w-full text-[#D93025]'
                            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVxqmnTGwNSnmGFPsDjNHspskqXbJhQTjNcFfdrlKtFkLRxzGQGlBnHSqZGjqnNhBthgCL"
                        >
                            Email <HiOutlineMail  size={ 30 } color="#D93025"/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease bg-[#565f69]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://drive.google.com/file/d/1IxCBSzYNFg0CLvrLLawgvfCPypA1pIE2/view?usp=sharing"
                        >
                            Resume <BsFillPersonLinesFill  size={ 30 }/>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default NavBar