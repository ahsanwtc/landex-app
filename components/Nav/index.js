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
    <nav className="fixed w-full bg-gray-800">
      <div className="container m-auto px-6 md:px-12 lg:px-6">
        
        <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
          <div className="w-full flex justify-between cursor-pointer lg:w-auto">
            <Link href='/'><h1 className='font-bold text-4xl'>Landex</h1></Link>

            {/* Mobile Button */}
            <div className='block lg:hidden z-10' onClick={handleNavButton}>
              {nav ? <AiOutlineClose size={20} style={{ color: textColor }}/> : <AiOutlineMenu size={20} style={{ color: textColor }}/>}
            </div>
          </div>

          <div className="hidden w-full bg-gray-800 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex">
            <div className="block w-full lg:items-center lg:flex">
              <ul className="space-y-6 pb-6 tracking-wide font-medium text-white lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
                <li className='cursor-pointer p-4'>
                  <Link href='/mint' className="block md:px-3">
                    <span>Mint</span>
                  </Link>
                </li>
                <li className='cursor-pointer p-4'>
                  <Link href='/market' className="block md:px-3">
                    <span>Market</span>
                  </Link>
                </li>
                <li className='cursor-pointer p-4'>
                  <Link href='/about' className="block md:px-3">
                    <span>About</span>
                  </Link>
                </li>                            
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${nav ? 'left-0' : 'left-[-100%]'}`}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/'>Home</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/mint'>Mint</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/market'>Market</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500' onClick={handleNavButton}><Link href='/about'>About</Link></li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default Nav;