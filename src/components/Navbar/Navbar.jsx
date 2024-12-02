import React from 'react'

const navbarLinks = [ //Array donde almaceno los links principales
  {
    id:1,
    title:"Sobre mi",
    Link:"#sobremi",
  },
  {
    id:2,
    title:"Proyectos",
    Link:"#proyectos",
  },
  {
    id:3,
    title:"Contacto",
    Link:"#contacto",
  }
]



const Navbar = () => {
  return (
    <nav className='fixed top-0  bg-black w-full bg-opacity-50'>
        <div className='flex justify-center items-center sm:px-12 sm:py-6 px-4 py-3'>
          <div>
            <ul className='flex sm:space-x-8 space-x-4'>
              {navbarLinks.map((link)=>( //Aqui cada elemento del array anterior pasa a llamarse "link"
                <li key={link.id}>
                  <a  className='text-white text-2xl sm:text-lg text-sm hover:text-rose-400 
                  transition-transform hover:scale-125 transform inline-block duration-300' href={link.Link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </nav>    
  )
}



export default Navbar
