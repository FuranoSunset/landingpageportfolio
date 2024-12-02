import React from 'react'

const navbarRedes = [
    {
      id:1,
      title:"Linkedin",
      Link:'https://www.linkedin.com/in/franciscogarciamariscal/',
      icon: 'bi bi-linkedin'
    },
    {
      id:2,
      title:"GitHub",
      Link:"https://github.com/FuranoSunset",
      icon: 'bi bi-github'
    },
  ]

  const NavbarRedes = () => {
    return (
      <nav className='fixed top-0 right-0'>
          <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
            <div>
              <ul className='flex sm:space-x-8 space-x-4'>
                {navbarRedes.map((red)=>( //Aqui cada elemento del array anterior pasa a llamarse "red"
                  <li key={red.id}>
                    <a target= '_blank'
                    rel='noopener noreference'
                    href={red.Link}>
                      <i className={`${red.icon} text-lg sm:text-2xl text-white 
                        transition-transform hover:scale-125 transform inline-block duration-300`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </nav>    
    )
  }
  

  export default NavbarRedes