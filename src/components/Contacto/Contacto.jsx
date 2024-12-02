import React from 'react'

const Contacto = () => {
    return(
        <section className='flex ml-20 my-44' id='contacto'>
            <div>
                <div>
                    <header id='nombre' className='text-6xl'>Contacto:</header>
                    <div className='flex my-8'>
                    <h2>Email:</h2>
                    <p>fran.garcia.mariscal@gmail.com</p>
                    <h2>CV</h2>
                    <embed src="\src\assets\Francisco-Javier-García-Mariscal-CV.F.pdf" type="application/pdf" width="100%" height="300px" className='flex grid grid-cols-4' />
                    <a href="">Descarga mi CV</a>
                    <div className='grid grid-cols-3 content-center my-16 space-x-2'>
                                         
                    </div>
                    

                </div>
                </div>
            </div>
        </section>
    )
}




export default Contacto