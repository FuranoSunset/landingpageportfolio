import React from 'react'

const Contacto = () => {
    return(
        <footer className='grid grid-cols-10 bg-gray-950 w-full bg-opacity-100 text-white pb-10' id='contacto'>
            <div className='col-start-3 col-span-6'>
            <header id='nombre' className='text-4xl my-5'>Contacto:</header>
                <div className='flex justify-between my-5'>
                    <i id='email' className='bi bi-envelope-at-fill text-2xl'>Email: fran.garcia.mariscal@gmail.com</i>
                    <a className='flex items-center justify-center text-xl border-white rounded-md border-4 size-1/4 hover:text-rose-400 
                  transition-transform hover:scale-110 transform duration-300' href="./Francisco-Javier-García-Mariscal-CV.F.pdf" download="Francisco-Javier-García-Mariscal-CV.F.pdf" >Descargar CV</a>
                </div>
            </div>
        </footer>
    )
}


export default Contacto