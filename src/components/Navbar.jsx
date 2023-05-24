import { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClose = () => {
    setNavOpen(false);
  };

  return (
    <div className="!z-[999999999] hidden max-lg:block">
        <div className="nav">
            <div className="nav-toggle max-lg:flex justify-center items-center">
            <div className="menu-toggle cursor-svg" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className='mix-blend-difference text-[#ffffff] f-alexan text-[20px] max-md:text-[16px] border py-2 px-4 rounded-full'>{navOpen ? "Close" :"Menu"}</span>
                </div>
            </div>
            </div>
        </div>
        <div
        className="ctn-items-nav !bg-[#467486]"
        style={{
            clipPath: navOpen ? "circle(100%)" : "circle(0)",
            transition: navOpen ? "clip-path 0.8s ease-in-out" : "clip-path 0.6s ease-in-out",
        }}
        >
            <div className="wrapper-items-nav f-alexan mt-[100px]">
                <ul>
                    <li>
                        <a
                        href="/"
                        onClick={() => handleClose()}
                        style={{
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "0.2s" : "0s",
                        }}
                        >
                        <span className="uppercase text-[56px] max-md:text-[36px]">¿Quiénes somos?</span>
                        </a>
                    </li>
{/*                     
                    <li>
                        <a
                        href="/work"
                        onClick={() => handleClose()}
                        style={{
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "0.4s" : "0s",
                        }}
                        >
                        <span className="uppercase text-[56px] max-md:text-[36px]">Productos</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                opacity: navOpen ? "1" : "0",
                                transitionDelay: navOpen ? "0.4s" : "0s",
                            }}>
                            <span className='uppercase text-[56px] max-md:text-[36px]'>Reseñas</span>
                        </a>
                    </li> */}
                </ul>
            </div>
            <div className="flex justify-center items-end w-screen px-8 mb-12">
                <a className="flex justify-between items-center w-[90%] border-[#ffffff] border-y-2 py-2 hover:px-2 duration-300" href="mailto:josephsan2301@gmail.com">
                    <span className='f-alexan text-xl text-white'>Contacto</span>
                    <span className='f-alexan font-thin text-xl text-white'>&#10230;</span>
                </a>
            </div>
            <div class="relative w-screen h-auto flex justify-center items-center !z-[999999]">
                {/* <div class="ml-16 max-lg:ml-8 text-left max-md:text-center max-md:flex max-md:flex-col max-md:justify-center max-md:items-center text-white !z-[99999]">
                    <div class='flex text-left max-md:text-center !z-[99999] text-[#ffffff]'>
                        <a href="https://www.linkedin.com/in/joseph-santamaria-15269b257" class="!z-[99999] mr-6">
                            <i class="fa-brands fa-facebook text-[20px]"></i>  
                        </a>
                        <a href="https://github.com/JosephASG" class="!z-[99999] mr-6">
                             <i class="fa-brands fa-instagram text-[20px]"></i>
                        </a>
                        <a href="https://www.instagram.com/joseph_santaamaria/" class="!z-[99999]">
                            <i class="fa-brands fa-whatsapp text-[20px]"></i>
                        </a>
                    </div>
                </div> */}

                <div class="text-center max-md:text-center max-md:flex max-md:flex-col max-md:justify-center max-md:items-center text-white !z-[99999]">
                    <div class='flex text-left max-md:text-center !z-[99999] text-[#ffffff]'>
                        <span class="f-alexan text-[1vw] max-lg:text-[12px] content__title__hero" data-splitting data-effect11>© Mónica Murillo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;
