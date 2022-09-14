import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNavButton = () => setNav(!nav);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#FFFFFF');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300' style={{ backgroundColor: color }}>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 className='font-bold text-4xl' style={{ color: textColor }}>Landex</h1>
        </Link>
        
        <ul className='hidden sm:flex' style={{ color: textColor }}>
          <li className='p-4'><Link href='/'>Home</Link></li>
          <li className='p-4'><Link href='/mint'>Mint</Link></li>
          <li className='p-4'><Link href='/#market'>Market</Link></li>
          <li className='p-4'><Link href='/about'>About</Link></li>
        </ul>

        {/* Mobile Button */}
        <div className='block sm:hidden z-10' onClick={handleNavButton}>
          {nav ? <AiOutlineClose size={20} style={{ color: textColor }}/> : <AiOutlineMenu size={20} style={{ color: textColor }}/>}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${nav ? 'left-0' : 'left-[-100%]'}`}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/'>Home</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/mint'>Mint</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/#market'>Market</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/about'>About</Link></li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Nav;