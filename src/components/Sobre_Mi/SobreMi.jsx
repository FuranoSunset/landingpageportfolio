import React from 'react'


const SobreMi = () => {
    return(
        <section className='grid grid-cols-10 grid-rows-1 text-center sm:text-left' id='sobremi'>
            <div className='my-28 col-start-3 col-span-6'>
                <div>
                    <header id='sobremi' className='text-4xl'>Sobre Mi:</header>
                    <p id='descripcion_larga' className='text-3xl indent-2'>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Nisi, totam labore? Voluptate error nisi reprehenderit praesentium, 
                        aliquid qui accusamus corrupti sequi architecto deserunt corporis! Odit sit harum unde 
                        quod eveniet!</p>
                </div>
                <div className='flex my-16'>
                    <header id='tecnologias' className='text-4xl indent-2'>Stack Tecnológico:</header>
                    <div className='grid grid-cols-5 gap-x-3 gap-y-3 place-items-center my-28 sm:flex-wrap'>
                        <img src='./reactlogo.png' alt="logo de react"/>
                        <img src='./phplogo.png' alt="logo de php"/>
                        <img src='./pythonlogo.png' alt="logo de python"/>
                        <img src='./typescriptlogo.png' alt="logo de typescript"/>
                        <img src='./mysqllogo.png' alt="logo de mysql"/>
                        <img src='./jslogo.png' alt="logo de js"/>
                        <img src='./javalogo.png' alt="logo de java"/>
                        <img src='./angularlogo.png' alt="logo de angular"/>
                        <img src='./tsqllogo.png' alt="logo de tsql"/>
                        <img src='./wordpresslogo.png' alt="logo de wordpress"/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default SobreMi