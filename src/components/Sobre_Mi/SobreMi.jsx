import React from 'react'

const SobreMi = () => {
    return(
        <section className='grid grid-cols-10 gap-4 text-wrap' id='sobremi'>
            <div className='my-44 col-start-3 col-span-6'>
                <div>
                    <header id='sobremi' className='text-4xl'>Sobre Mi:</header>
                    <p id='descripcion_larga' className='text-3xl indent-2'>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Nisi, totam labore? Voluptate error nisi reprehenderit praesentium, 
                        aliquid qui accusamus corrupti sequi architecto deserunt corporis! Odit sit harum unde 
                        quod eveniet!</p>
                </div>
                <div className='flex my-16'>
                    <header id='tecnologias' className='text-4xl indent-2'>Stack Tecnológico:</header>
                    <div className='grid grid-cols-5 gap-x-3 gap-y-3 place-items-center my-28 md:autofill:'>
                        <img src='\src\assets\Tecnologias\reactlogo.png' alt="logo de react"/>
                        <img src='\src\assets\Tecnologias\phplogo.png' alt="logo de php"/>
                        <img src='\src\assets\Tecnologias\pythonlogo.png' alt="logo de python"/>
                        <img src='\src\assets\Tecnologias\typescriptlogo.png' alt="logo de typescript"/>
                        <img src='\src\assets\Tecnologias\mysqllogo.png' alt="logo de mysql"/>
                        <img src='\src\assets\Tecnologias\jslogo.png' alt="logo de js"/>
                        <img src='\src\assets\Tecnologias\javalogo.png' alt="logo de java"/>
                        <img src='\src\assets\Tecnologias\angularlogo.png' alt="logo de angular"/>
                        <img src='\src\assets\Tecnologias\tsqllogo.png' alt="logo de tsql"/>
                        <img src='\src\assets\Tecnologias\wordpresslogo.png' alt="logo de wordpress"/>                          
                    </div>
                    

                </div>
            </div>
        </section>
    )
}




export default SobreMi