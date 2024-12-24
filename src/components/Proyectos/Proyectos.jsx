import React from 'react'

const Proyectos = () => {
    return(
        <section id='proyectos' className='grid grid-cols-10 grid-rows-2 gap-4 text-wrap text-center sm:text-left'>
            <div className='col-start-3 col-span-6'>
                <div>
                    <header className='text-6xl'>Proyectos:</header>
                    <div className='grid grid-cols-1 sm:grid-cols-3 content-center my-16 gap-4'>
                        <div className='md:h-full md:w-48'>
                            <h2 className='text-4xl'>Proyecto 1</h2>
                            <img src='' alt="proyecto 1"/>
                            <p>Descripcion</p>
                        </div>
                        <div>
                            <h2 className='text-4xl'>Proyecto 2</h2>
                            <img src='' alt="proyecto 2"/>
                            <p>Descripcion</p>
                        </div>  
                        <div>
                            <h2 className='text-4xl'>Proyecto 3</h2>
                            <img src='' alt="proyecto 3"/>
                            <p>Descripcion</p>
                        </div>                             
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Proyectos