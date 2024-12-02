import React from 'react'

const Contacto = () => {
    return(
        <section className='flex ml-20 my-10' id='contacto'>
            <div>
                <div>
                    <header id='nombre' className='text-6xl'>Contacto:</header>    
                    <i class="bi bi-envelope-at-fill"></i>
                    <h2 className='text-xl'>Email:</h2>
                    <p className='text-xl'>fran.garcia.mariscal@gmail.com</p>
                    <div className='flex ml-20 my-10'>
                    <br/>
                    <a href="\src\assets\Francisco-Javier-García-Mariscal-CV.F.pdf" download="Francisco-Javier-García-Mariscal-CV.F.pdf" className='text-xl'>Descargar CV.</a>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Contacto