import { Link } from 'react-router-dom';
import logo from '../../public/dark-logo.png'
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";



const Footer = () => {
    return (
        <div className="w-full">
            <footer className="footer  p-10 bg-[#d7dadd] text-black">
                <nav>
                    <div className="h-[140px] space-y-4  w-[400px]">
                        <img className='h-7' src={logo} alt="" />
                        <p className="text-black text-base">Let's study together with friends and get higher facilities in <span className='text-[#3d90e9]'>group study with this platform.</span></p>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-cols-1 md:grid-cols-3 ">
                            <div className='text-2xl text-[#3d90e9] flex items-center gap-4'>
                                <Link to={'error'} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook /></Link>
                                <Link to={'error'} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><BsInstagram /></Link>
                                <Link to={'error'} href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><BsTwitter /></Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link to={'error'} className="link link-hover">Branding</Link>
                    <Link to={'error'} className="link link-hover">Design</Link>
                    <Link to={'error'} className="link link-hover">Marketing</Link>
                    <Link to={'error'} className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to={'error'} className="link link-hover">About us</Link>
                    <Link to={'error'} className="link link-hover">Contact</Link>
                    <Link to={'error'} className="link link-hover">Jobs</Link>
                    <Link to={'error'} className="link link-hover">Press kit</Link>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;