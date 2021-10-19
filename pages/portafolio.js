import Head from 'next/head'

import IconPortafolio from '../public/images/portafolio.svg'
import styles from '../styles/pages/Portafolio.module.scss'
import ProyectoCard from '../components/portafolio/ProyectoCard'
import contenido from '../content/portafolio.json'
import Particulas from '../clases/Particulas'

const Portafolio = () => {

    const contenidoPortafolio = contenido.portafolio

    return(
        <>
            <Head>
                <title>Portafolio | Julian Bohorquez</title>
                <meta name="description" content="Tengo más de 20 años de experiencia en diseño web, diseño de interfaces de usuario, estrategia para medios digitales y programación del lado del servidor" />
            </Head>
            <div className={` ${ styles.portafolio_wrap }`}>
                <div className={ styles.portafolio_particulas }>
                    <Particulas />
                </div>
                <div className={`${ styles.portafolio_cabecera }`}>
                    <div className="site-wrap">
                        <IconPortafolio />
                        <h1>Portafolio_</h1>
                        <p>Creo soluciones basadas en datos que mejoran las experiencias de los usuarios.</p>
                    </div>
                </div>
                <div className={ styles.portafolio_main_body }>
                    <div className={`site-wrap ${ styles.portafolio_grid }`}>
                        {
                            contenidoPortafolio.map( item => (
                                <div key={ item.index } className={ styles.portafolio_item }>
                                    <ProyectoCard 
                                        index={ item.index < 10 ? `0${ item.index }` : item.index }
                                        titulo={ item.titulo }
                                        desc={ item.descripcion }
                                        techno={ item.tecnologia }
                                        empresa={ item.empresa }
                                        anio={ item.anio.inicio }
                                        url={ `/${ item.slug }` }
                                        ft_image={ item.ft_image }
                                    />
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Portafolio